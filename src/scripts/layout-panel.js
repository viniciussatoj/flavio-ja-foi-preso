/**
 * Painel de layout, em DialKit.
 *
 * Importado sob demanda, so com ?calibrate na URL: o visitante normal nao
 * baixa esse pedaco. Cada mexida reescreve as variaveis CSS do :root; o
 * "Copy" do DialKit devolve os valores para colar em layout-config.js.
 */
import { createDialKit, createDialRoot } from "dialkit/vanilla";
import "dialkit/vanilla/styles.css";
import { LAYOUT, aplicarLayout } from "./layout-config.js";

const { cores, desktop: d, mobile: m, espacos: e, story: st } = LAYOUT;

/* O painel guarda os valores no navegador (persist). Sem isto, um valor
   salvo antes passava por cima de um padrao novo em layout-config.js e a
   mudanca no codigo "nao aparecia". O id leva uma assinatura dos padroes:
   mudou o codigo, o painel recomeca dos valores novos. */
function assinatura(obj) {
  const s = JSON.stringify(obj);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}
const ID_PAINEL = `layout-${assinatura(LAYOUT)}`;

// Limpa o que paineis de versoes anteriores deixaram salvo.
try {
  for (const k of Object.keys(localStorage)) {
    if (k.startsWith("dialkit:layout") && k !== `dialkit:${ID_PAINEL}`) localStorage.removeItem(k);
  }
} catch { /* storage bloqueado: nada a limpar */ }

export function montarPainelLayout() {
  createDialRoot({ position: "top-right", theme: "dark" });

  const kit = createDialKit("Layout", {
    cores: {
      fundo: cores.fundo,
      texto: cores.texto,
      vermelho: cores.vermelho,
      azul: cores.azul,
      claro: cores.claro,
    },
    titulo: {
      inverterDesktop: LAYOUT.inverterTituloDesktop,
      inverterMobile: LAYOUT.inverterTituloMobile,
    },
    desktop: {
      _collapsed: true,
      titulo: [d.titulo, 48, 200, 1],
      tituloEntrelinha: [d.tituloEntrelinha, 40, 220, 1],
      topo: [d.topo, 0, 300, 1],
      coluna: [d.coluna, 480, 1200, 4],
      colunaCasos: [d.colunaCasos, 400, 1200, 4],
      motivo: [d.motivo, 12, 48, 1],
      pilula: [d.pilula, 10, 24, 1],
      tituloItem: [d.tituloItem, 16, 80, 1],
      texto: [d.texto, 10, 24, 1],
      textoEntrelinha: [d.textoEntrelinha, 12, 48, 0.1],
    },
    mobile: {
      _collapsed: true,
      titulo: [m.titulo, 32, 120, 1],
      tituloEntrelinha: [m.tituloEntrelinha, 32, 140, 1],
      topo: [m.topo, 0, 200, 1],
      margem: [m.margem, 8, 48, 1],
      motivo: [m.motivo, 12, 40, 1],
      pilula: [m.pilula, 10, 24, 1],
      tituloItem: [m.tituloItem, 16, 64, 1],
      texto: [m.texto, 10, 20, 1],
      textoEntrelinha: [m.textoEntrelinha, 12, 36, 1],
    },
    espacos: {
      _collapsed: true,
      tituloMotivo: [e.tituloMotivo, 0, 160, 1],
      motivoAbas: [e.motivoAbas, 0, 160, 1],
      abasConteudo: [e.abasConteudo, 0, 120, 1],
      entreSecoes: [e.entreSecoes, 0, 160, 1],
      rotuloSecao: [e.rotuloSecao, 0, 64, 1],
      entreItens: [e.entreItens, 0, 96, 1],
    },
    story: {
      _collapsed: true,
      largura: [st.largura, 280, 600, 1],
      altura: [st.altura, 400, 1200, 1],
      raio: [st.raio, 0, 32, 1],
      miniLargura: [st.miniLargura, 60, 320, 1],
      miniAltura: [st.miniAltura, 100, 560, 1],
      gap: [st.gap, 0, 48, 1],
      fundoOpacidade: [st.fundoOpacidade, 0, 1, 0.05],
      fundoDesfoque: [st.fundoDesfoque, 0, 24, 1],
      troca: { type: "easing", duration: st.duracao, ease: st.curva },
    },
  }, { id: ID_PAINEL, persist: true });

  const aplicar = (v) => {
    // Uma troca em spring nao tem equivalente em CSS: fica com a curva
    // padrao e so a duracao muda.
    const troca = v.story.troca;
    const curva = troca.type === "easing" ? troca.ease : st.curva;
    const duracao = troca.type === "easing" ? troca.duration : (troca.visualDuration ?? st.duracao);
    aplicarLayout({
      cores: v.cores,
      inverterTituloDesktop: v.titulo.inverterDesktop,
      inverterTituloMobile: v.titulo.inverterMobile,
      desktop: v.desktop,
      mobile: v.mobile,
      espacos: v.espacos,
      story: { ...v.story, duracao, curva },
    });
  };

  aplicar(kit.values);
  return kit.subscribe(aplicar);
}
