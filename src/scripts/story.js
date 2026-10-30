/**
 * Story de um caso ("Mais detalhes").
 *
 * Os cartoes saem do conteudo, nao de um numero fixo: capa com a chamada,
 * um cartao por paragrafo da descricao, o status e as fontes. Caso com
 * mais texto ganha mais cartoes.
 *
 * Duas apresentacoes do mesmo DOM:
 * - Desktop: o cartao ativo no meio da janela e os seguintes pequenos a
 *   direita, alinhados por baixo (Wireframe 7). As posicoes saem daqui;
 *   o CSS anima a troca com a duracao e a curva do layout-config.
 * - Mobile: como um story do Instagram. Tela cheia, um cartao por vez,
 *   passando de lado com o dedo (rolagem com encaixe, a mecanica da
 *   faixa do portfolio-v2) e barrinhas de progresso no topo.
 */
import { compartilhar, urlDe } from "./compartilhar.js";
import { caminho } from "./base.js";

const MOBILE = matchMedia("(max-width: 720px)");

const dialog = document.getElementById("story");
const faixa = document.getElementById("story-faixa");

let caso = null;
let cartoes = [];
let atual = 0;
let aoFechar = () => {};

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const dominio = (url) => new URL(url).hostname.replace(/^www\./, "");

/** A sequencia de cartoes de um caso. */
function cartoesDe(c) {
  return [
    { tipo: "texto", html: `${esc(c.chamada)}: ${esc(c.resumo)}` },
    ...c.descricao.map((p) => ({ tipo: "texto", html: esc(p) })),
    { tipo: "texto", html: `Onde está o caso: ${esc(c.status)}` },
    { tipo: "fontes" },
  ];
}

const SETA = `<img src="${caminho("/img/seta-story-dir.svg")}" width="42.3575" height="22.3574" alt="" />`;

function navDe(i, total) {
  return `
    <div class="cartao__nav">
      <button class="cartao__seta cartao__seta--esq" type="button" data-ir="${i - 1}" aria-label="Cartão anterior" ${i === 0 ? "disabled" : ""}>${SETA}</button>
      <span>${i + 1}/${total}</span>
      <button class="cartao__seta cartao__seta--dir" type="button" data-ir="${i + 1}" aria-label="Próximo cartão" ${i === total - 1 ? "disabled" : ""}>${SETA}</button>
    </div>`;
}

const PILULA_COMPARTILHAR = (classe = "") => `
  <button class="pilula pilula--cheia ${classe}" type="button" data-compartilhar>
    Compartilhar
    <img src="${caminho("/img/compartilhar.svg")}" width="16" height="16" alt="" />
  </button>`;

function htmlDoCartao(c, cartao, i, total) {
  const progresso = `
    <ol class="cartao__progresso" aria-hidden="true">
      ${Array.from({ length: total }, (_, k) => `<li${k <= i ? " data-feito" : ""}></li>`).join("")}
    </ol>`;
  const fechar = `${progresso}
    <button class="cartao__fechar" type="button" data-fechar aria-label="Fechar">
      <img src="${caminho("/img/fechar-story.svg")}" width="36" height="36" alt="" />
    </button>`;

  // Cada cartao tem a propria foto (c.fotos, na ordem do story). Sem
  // foto, o cartao e so texto (cartao--sem-foto no CSS).
  const f = c.fotos?.[i];
  const foto = f
    ? `<img class="cartao__foto" src="${esc(caminho(f.src))}" alt="${esc(f.alt ?? "")}" decoding="async" />`
    : "";
  // As licencas CC pedem o link para o texto da licenca junto do credito.
  const textoCredito = f?.licenca
    ? `<a href="${esc(f.licenca)}" target="_blank" rel="noopener license">${esc(f.credito)}</a>`
    : esc(f?.credito ?? "");
  const credito = f?.credito ? `<p class="cartao__credito">Foto: ${textoCredito}</p>` : "";

  if (cartao.tipo === "fontes") {
    const itens = c.fontes
      .map((u) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(dominio(u))}</a></li>`)
      .join("");
    return `
      ${foto}
      ${fechar}
      <div class="cartao__conteudo">
        ${credito}
        <div class="cartao__fontes">
          <div class="cartao__textos">
            <p class="cartao__titulo">Fontes</p>
            <ul class="cartao__lista">${itens}</ul>
          </div>
          ${PILULA_COMPARTILHAR("pilula--grande")}
        </div>
        ${navDe(i, total)}
      </div>`;
  }

  return `
    ${foto}
    ${fechar}
    <div class="cartao__conteudo">
      ${credito}
      ${PILULA_COMPARTILHAR()}
      <div class="cartao__textos">
        <p class="cartao__titulo">${esc(c.titulo)}</p>
        <p class="cartao__data">${esc(c.periodo)}</p>
        <p class="cartao__texto">${cartao.html}</p>
      </div>
      ${navDe(i, total)}
    </div>`;
}

function montar() {
  faixa.replaceChildren();
  cartoes = cartoesDe(caso).map((cartao, i, todos) => {
    const el = document.createElement("article");
    el.className = `cartao cartao--${cartao.tipo}${caso.fotos?.[i] ? "" : " cartao--sem-foto"}`;
    el.dataset.i = String(i);
    el.setAttribute("aria-roledescription", "cartão");
    el.setAttribute("aria-label", `${i + 1} de ${todos.length}`);
    el.innerHTML = htmlDoCartao(caso, cartao, i, todos.length);
    faixa.append(el);
    return el;
  });
}

const num = (nome) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(nome)) || 0;

/** Desktop: escreve a posicao de cada cartao. */
function posicionar() {
  if (MOBILE.matches) {
    cartoes.forEach((el, i) => {
      el.dataset.estado = i === atual ? "ativo" : "depois";
      el.inert = false;
    });
    return;
  }
  const W = innerWidth;
  const H = innerHeight;
  const larg = num("--story-largura") || 412;
  const alt = Math.min(num("--story-altura") || 917, H - 108);
  const miniL = num("--story-mini-largura") || 160;
  const miniA = num("--story-mini-altura") || 280;
  const gap = num("--story-gap") || 8;

  const x0 = (W - larg) / 2;
  const y0 = (H - alt) / 2;
  const base = y0 + alt;

  cartoes.forEach((el, i) => {
    let x, y, estado;
    if (i < atual) {
      x = x0 - miniL - gap;
      y = base - miniA;
      estado = "antes";
    } else if (i === atual) {
      x = x0;
      y = y0;
      estado = "ativo";
    } else {
      x = x0 + larg + gap + (i - atual - 1) * (miniL + gap);
      y = base - miniA;
      estado = x > W ? "longe" : "depois";
    }
    el.dataset.estado = estado;
    el.style.transform = `translate(${x}px, ${y}px)`;
    // Os pequenos continuam clicaveis (levam ate eles); os que sairam
    // da tela nao recebem foco.
    el.inert = estado === "antes" || estado === "longe";
  });
}

/** Mobile: a distancia de um cartao ao seguinte na faixa. */
function passoMobile() {
  const [a, b] = cartoes;
  if (!a) return 1;
  return b ? b.offsetLeft - a.offsetLeft : a.getBoundingClientRect().width;
}

function ir(n, suave = true) {
  const alvo = Math.max(0, Math.min(cartoes.length - 1, n));
  if (MOBILE.matches) {
    cartoes[alvo]?.scrollIntoView({ behavior: suave ? "smooth" : "instant", inline: "start", block: "nearest" });
    return;
  }
  const focoNoStory = dialog.contains(document.activeElement);
  atual = alvo;
  posicionar();
  // O cartao que tinha o foco pode ter saido da tela (inert): o foco
  // segue para o ativo.
  if (focoNoStory || document.activeElement === document.body) {
    cartoes[atual]?.querySelector("[data-compartilhar]")?.focus({ preventScroll: true });
  }
}

faixa.addEventListener("scroll", () => {
  if (!MOBILE.matches) return;
  const n = Math.round(faixa.scrollLeft / passoMobile());
  if (n !== atual) {
    atual = n;
    posicionar();
  }
}, { passive: true });

faixa.addEventListener("click", (e) => {
  const alvo = e.target;
  if (!(alvo instanceof Element)) return;

  const seta = alvo.closest("[data-ir]");
  if (seta) return ir(Number(seta.dataset.ir));

  if (alvo.closest("[data-fechar]")) return dialog.close();

  if (alvo.closest("[data-compartilhar]")) {
    return compartilhar({ titulo: `${caso.chamada} | Flávio já está preso?`, url: urlDe(caso.slug) });
  }

  // Desktop: clicar num cartao pequeno leva ate ele.
  const cartao = alvo.closest(".cartao");
  if (cartao && cartao.dataset.estado === "depois") return ir(Number(cartao.dataset.i));

  // Clique fora dos cartoes fecha.
  if (!cartao) dialog.close();
});

dialog.querySelector(".story__fechar-pagina").addEventListener("click", () => dialog.close());

// No documento, nao no dialog: o foco pode estar fora dele por um
// instante, quando o cartao que o tinha fica inert.
document.addEventListener("keydown", (e) => {
  if (!dialog.open || document.getElementById("compartilhar").open) return;
  // Setas dentro do DialKit ou do InterfaceKit mexem nos controles, nao
  // nos cartoes.
  if (e.target instanceof Element && e.target.closest(".dialkit-root, [data-interface-kit], input, textarea, select")) return;
  if (e.key === "ArrowRight") { e.preventDefault(); ir(atual + 1); }
  else if (e.key === "ArrowLeft") { e.preventDefault(); ir(atual - 1); }
});

dialog.addEventListener("close", () => {
  // O "close" chega depois, numa tarefa propria: se o story ja reabriu
  // com outro caso nesse meio-tempo, nao e para esvaziar o novo.
  if (dialog.open) return;
  faixa.replaceChildren();
  cartoes = [];
  aoFechar();
});

// Janela redimensionada ou layout mexido no painel (?calibrate).
for (const evento of ["resize", "layout"]) {
  addEventListener(evento, () => {
    if (dialog.open) posicionar();
  });
}
MOBILE.addEventListener("change", () => {
  if (!dialog.open) return;
  posicionar();
  ir(atual, false);
});

/** Abre o story de um caso. aoFecharStory roda quando ele fecha. */
export function abrirStory(c, aoFecharStory = () => {}) {
  caso = c;
  atual = 0;
  aoFechar = aoFecharStory;
  montar();
  // Sem transicao na primeira posicao: os cartoes nascem no lugar.
  faixa.style.setProperty("--story-duracao", "0s");
  posicionar();
  dialog.showModal();
  faixa.scrollLeft = 0;
  requestAnimationFrame(() => requestAnimationFrame(() => faixa.style.removeProperty("--story-duracao")));
  cartoes[0]?.querySelector("[data-compartilhar]")?.focus({ preventScroll: true });
}
