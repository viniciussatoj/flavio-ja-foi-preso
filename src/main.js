/**
 * Comportamento da pagina. O conteudo (linha do tempo, casos, perguntas)
 * ja vem escrito no HTML pelo build (src/scripts/render.js), para o
 * buscador ler; aqui ficam as abas e os stories.
 *
 * Os titulos e o "Mais detalhes" sao links para a pagina de cada caso
 * (/c/<slug>/); com JS, abrem o story por cima. O endereco /#<slug> e
 * /c/<slug>/?story abrem o story direto (links compartilhados).
 */
import { CASOS } from "./data/casos.js";
import { LAYOUT, aplicarLayout } from "./scripts/layout-config.js";
import { abrirStory } from "./scripts/story.js";

aplicarLayout(LAYOUT);

/* InterfaceKit: o editor visual (selecionar um elemento, mexer no estilo
   e "Copy Edits" para o agente). So em desenvolvimento, como no
   portfolio-v2: o Vite troca import.meta.env.DEV por false no build e o
   ramo inteiro cai fora. */
const calibrar = new URLSearchParams(location.search).has("calibrate");
if (import.meta.env.DEV || calibrar) {
  import("./scripts/seguir-dialogs.js").then((m) => m.seguirDialogs());
}
if (import.meta.env.DEV) {
  import("interface-kit").then(({ createInterfaceKit }) => createInterfaceKit({ enabled: true }).mount());
}

/* Painel de layout (DialKit): so com ?calibrate na URL, num chunk
   separado. Visitante normal nao baixa esse pedaco. */
if (calibrar) {
  import("./scripts/layout-panel.js").then((m) => m.montarPainelLayout());
}

/* ---------- Abas (so na pagina inicial) ---------- */

const abas = [...document.querySelectorAll('[role="tab"]')];

function escolherAba(id, { focar = false } = {}) {
  for (const aba of abas) {
    const sim = aba.id === `aba-${id}`;
    aba.setAttribute("aria-selected", String(sim));
    aba.tabIndex = sim ? 0 : -1;
    document.getElementById(aba.getAttribute("aria-controls")).hidden = !sim;
    if (sim && focar) aba.focus();
  }
}

for (const aba of abas) {
  aba.addEventListener("click", () => escolherAba(aba.id.replace("aba-", "")));
  aba.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = abas.indexOf(aba);
    const prox = abas[(i + (e.key === "ArrowRight" ? 1 : -1) + abas.length) % abas.length];
    escolherAba(prox.id.replace("aba-", ""), { focar: true });
  });
}

// "Por que Flavio Bolsonaro seria preso?" leva para as acusacoes.
document.querySelector("[data-ir-para]")?.addEventListener("click", (e) => {
  e.preventDefault();
  escolherAba("acusacoes");
  document.querySelector(".abas").scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ---------- Story ---------- */

const naPaginaDoCaso = Boolean(document.querySelector(".artigo"));

function abrirCaso(slug) {
  const caso = CASOS.find((c) => c.slug === slug);
  if (!caso) return;
  // Na pagina inicial o story ganha #slug; na do caso o endereco ja e dele.
  if (!naPaginaDoCaso) history.replaceState(null, "", `#${slug}`);
  abrirStory(caso, () => {
    if (!naPaginaDoCaso) history.replaceState(null, "", location.pathname + location.search);
    else if (location.search) history.replaceState(null, "", location.pathname);
    document.querySelector(`[data-caso="${slug}"]`)?.focus({ preventScroll: true });
  });
}

// Titulo, "Mais detalhes" e "Ver em stories": com JS, abrem o story em vez
// de seguir o link para a pagina do caso.
document.addEventListener("click", (e) => {
  const alvo = e.target instanceof Element && e.target.closest("[data-caso]");
  if (!alvo || e.metaKey || e.ctrlKey || e.shiftKey) return;
  e.preventDefault();
  abrirCaso(alvo.dataset.caso);
});

// Link compartilhado na pagina do caso: /c/<slug>/?story abre o story.
if (naPaginaDoCaso && new URLSearchParams(location.search).has("story")) {
  abrirCaso(document.querySelector(".artigo [data-caso]")?.dataset.caso);
}

// Link compartilhado: /#<slug> abre o caso na aba das acusacoes. Tambem
// quando so o # muda, sem recarregar a pagina.
function lerEndereco() {
  if (naPaginaDoCaso) return;
  const alvo = decodeURIComponent(location.hash.slice(1));
  if (CASOS.some((c) => c.slug === alvo)) {
    escolherAba("acusacoes");
    document.getElementById(`caso-${alvo}`)?.scrollIntoView({ block: "center" });
    if (!document.getElementById("story").open) abrirCaso(alvo);
  } else if (alvo === "acusacoes") {
    escolherAba("acusacoes");
  }
}
lerEndereco();
addEventListener("hashchange", lerEndereco);
