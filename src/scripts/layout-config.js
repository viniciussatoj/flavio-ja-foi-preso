/**
 * Parametros de layout do site.
 *
 * Mesma ideia do lightbox-config do portfolio: uma fonte unica que o
 * codigo le e o painel (DialKit, so com ?calibrate) ajusta ao vivo. Cada
 * valor vira uma variavel CSS no :root (ver aplicarLayout). Para fixar um
 * valor novo, copie do painel ("Copy") para ca.
 *
 * Valores iniciais tirados do Figma (Wireframe 5/6/7 e Android Compact).
 */

export const LAYOUT = {
  cores: {
    fundo: "#fffdf7",
    texto: "#1d1d1d",
    vermelho: "#ff0000",
    azul: "#0900ff",
    claro: "#f4f4f4",
  },
  /** Desktop (Wireframe 5 e 6): titulo escuro e "Ainda nao." vermelho.
   *  No mobile e na Wireframe 7 o Figma inverte. */
  inverterTituloDesktop: false,
  inverterTituloMobile: true,

  desktop: {
    titulo: 120, // px, Instrument Serif
    tituloEntrelinha: 110, // px, de uma linha a outra do titulo
    topo: 127, // px, do topo da janela ao titulo
    coluna: 916, // px, largura da coluna de conteudo
    colunaCasos: 800, // px, largura da lista de casos
    motivo: 24, // px, "Por que Flavio Bolsonaro seria preso?"
    pilula: 14, // px, texto das abas
    tituloItem: 40, // px, frase de cada fato e titulo de cada caso
    texto: 16, // px, resumo do caso
    textoEntrelinha: 28.8, // px (1.8 do texto)
  },
  mobile: {
    titulo: 64,
    tituloEntrelinha: 72,
    topo: 80,
    margem: 20, // px, margem lateral da pagina
    motivo: 20,
    pilula: 16,
    tituloItem: 32,
    texto: 12,
    textoEntrelinha: 20,
  },
  espacos: {
    tituloMotivo: 46, // px, do titulo ao link "Por que..."
    motivoAbas: 64, // px, do link as abas
    abasConteudo: 32, // px, das abas ao conteudo
    entreSecoes: 48, // px
    rotuloSecao: 16, // px, do rotulo vermelho ao primeiro caso
    entreItens: 32, // px
  },
  story: {
    largura: 412, // px, cartao ativo no desktop
    altura: 917, // px, limitado pela altura da janela
    raio: 8, // px
    miniLargura: 160, // px, cartoes seguintes no desktop
    miniAltura: 280, // px
    gap: 8, // px, entre cartoes no desktop (no mobile cada um e a tela inteira)
    fundoOpacidade: 0.6, // veu escuro sobre a pagina no desktop
    fundoDesfoque: 2, // px
    duracao: 0.35, // s, troca de cartao no desktop
    curva: [0.22, 1, 0.36, 1], // cubic-bezier da troca
  },
};

const px = (n) => `${n}px`;

/** Escreve a configuracao como variaveis CSS no :root. */
export function aplicarLayout(cfg = LAYOUT) {
  const s = document.documentElement.style;
  const { cores, desktop: d, mobile: m, espacos: e, story: st } = cfg;

  s.setProperty("--fundo", cores.fundo);
  s.setProperty("--texto", cores.texto);
  s.setProperty("--vermelho", cores.vermelho);
  s.setProperty("--azul", cores.azul);
  s.setProperty("--claro", cores.claro);

  // A cor de cada linha do titulo, por viewport.
  const [l1d, l2d] = cfg.inverterTituloDesktop ? ["--vermelho", "--texto"] : ["--texto", "--vermelho"];
  const [l1m, l2m] = cfg.inverterTituloMobile ? ["--vermelho", "--texto"] : ["--texto", "--vermelho"];
  s.setProperty("--titulo-l1-d", `var(${l1d})`);
  s.setProperty("--titulo-l2-d", `var(${l2d})`);
  s.setProperty("--titulo-l1-m", `var(${l1m})`);
  s.setProperty("--titulo-l2-m", `var(${l2m})`);

  for (const [k, v] of Object.entries(d)) s.setProperty(`--d-${k}`, px(v));
  for (const [k, v] of Object.entries(m)) s.setProperty(`--m-${k}`, px(v));
  for (const [k, v] of Object.entries(e)) s.setProperty(`--e-${k}`, px(v));

  s.setProperty("--story-largura", px(st.largura));
  s.setProperty("--story-altura", px(st.altura));
  s.setProperty("--story-raio", px(st.raio));
  s.setProperty("--story-mini-largura", px(st.miniLargura));
  s.setProperty("--story-mini-altura", px(st.miniAltura));
  s.setProperty("--story-gap", px(st.gap));
  s.setProperty("--story-fundo", `rgb(0 0 0 / ${st.fundoOpacidade})`);
  s.setProperty("--story-desfoque", px(st.fundoDesfoque));
  s.setProperty("--story-duracao", `${st.duracao}s`);
  s.setProperty("--story-curva", `cubic-bezier(${st.curva.join(",")})`);

  // O story calcula as posicoes no JS e precisa refazer a conta.
  dispatchEvent(new Event("layout"));
}
