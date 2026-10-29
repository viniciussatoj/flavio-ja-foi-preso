/**
 * HTML do conteudo, a partir de src/data/casos.js.
 *
 * Roda no build (plugin do vite.config.js e scripts/paginas-de-
 * compartilhamento.js), para o texto ja estar no HTML que o buscador le.
 * Nao toca no DOM: recebe a base do endereco e devolve strings.
 */
import { ATUALIZADO, CASOS, LINHA_DO_TEMPO, PERGUNTAS, SECOES } from "../data/casos.js";

export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

const NOME = "Flávio já está preso?";
const dataBr = (iso) => iso.split("-").reverse().join("/");
const dominio = (url) => new URL(url).hostname.replace(/^www\./, "");

/** Linha do tempo (conteudo do <ol id="fatos">). */
export function htmlFatos() {
  return LINHA_DO_TEMPO.map((f) => {
    const links = f.fontes.map((u, i) => `<a href="${esc(u)}" target="_blank" rel="noopener">${i + 1}</a>`).join(", ");
    return `
    <li class="fato">
      <p class="fato__frase">${esc(f.frase)} <span class="data">em ${esc(f.data)}</span></p>
      <p class="fontes-curtas">${f.fontes.length > 1 ? "Fontes" : "Fonte"} ${links}</p>
    </li>`;
  }).join("");
}

/** Secoes de casos (conteudo do <div id="secoes">). O titulo de cada caso
 *  e um link de verdade para a pagina do caso; o JS intercepta e abre o
 *  story. */
export function htmlSecoes(base) {
  const seta = `<img src="${base}img/seta-detalhes.svg" width="26.3526" height="14.3526" alt="" />`;
  return SECOES.map((s) => {
    const casos = CASOS.filter((c) => c.secao === s.id).map((c) => `
      <li class="caso" id="caso-${c.slug}">
        <h3 class="caso__titulo"><a class="caso__link" href="${base}c/${c.slug}/" data-caso="${c.slug}">${esc(c.titulo)}</a> <span class="data">${esc(c.periodo)}</span></h3>
        <p class="caso__resumo">${esc(c.chamada)}: ${esc(c.resumo)}</p>
        <a class="caso__mais" href="${base}c/${c.slug}/" data-caso="${c.slug}">
          <span>Mais detalhes</span>${seta}
        </a>
      </li>`).join("");
    return `
    <section class="secao" aria-labelledby="secao-${s.id}">
      <h2 class="secao__rotulo" id="secao-${s.id}">${esc(s.rotulo)}</h2>
      <ul class="secao__casos">${casos}</ul>
    </section>`;
  }).join("");
}

/** Perguntas frequentes, visiveis na pagina. */
export function htmlPerguntas() {
  return `
    <section class="perguntas" aria-labelledby="perguntas-titulo">
      <h2 class="secao__rotulo" id="perguntas-titulo">Perguntas frequentes</h2>
      ${PERGUNTAS.map((p) => `
      <details class="pergunta">
        <summary class="pergunta__titulo">${esc(p.pergunta)}</summary>
        <p class="pergunta__resposta">${esc(p.resposta)}</p>
      </details>`).join("")}
      <p class="atualizado">Atualizado em ${dataBr(ATUALIZADO)}.</p>
    </section>`;
}

/** Dados estruturados da pagina inicial: o site e as perguntas. */
export function jsonLdInicio(site) {
  return [
    { "@context": "https://schema.org", "@type": "WebSite", name: NOME, url: `${site}/`, inLanguage: "pt-BR" },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      dateModified: ATUALIZADO,
      mainEntity: PERGUNTAS.map((p) => ({ "@type": "Question", name: p.pergunta, acceptedAnswer: { "@type": "Answer", text: p.resposta } })),
    },
  ];
}

/** Pagina de um caso: o texto inteiro, a foto de capa, o status, as
 *  fontes e links para os outros casos. */
export function htmlArtigo(c, base) {
  const secao = SECOES.find((s) => s.id === c.secao)?.rotulo ?? "";
  const capa = c.fotos?.[0];
  const foto = capa ? `
    <figure class="artigo__foto">
      <img src="${base}${capa.src.replace(/^\//, "")}" alt="${esc(capa.alt ?? "")}" width="${capa.w ?? ""}" height="${capa.h ?? ""}" />
      <figcaption>Foto: ${esc(capa.credito ?? "")}</figcaption>
    </figure>` : "";
  const fontes = c.fontes.map((u) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(dominio(u))}</a></li>`).join("");
  const outros = CASOS.filter((o) => o.slug !== c.slug)
    .map((o) => `<li><a href="${base}c/${o.slug}/">${esc(o.titulo)}</a></li>`).join("");
  return `
    <article class="artigo">
      <nav class="artigo__migalha" aria-label="Você está em"><a href="${base}">${NOME}</a> <span aria-hidden="true">›</span> ${esc(secao)}</nav>
      <h1 class="artigo__titulo">${esc(c.titulo)}</h1>
      <p class="artigo__meta"><span class="data">${esc(c.periodo)}</span> <span class="data">Atualizado em ${dataBr(ATUALIZADO)}</span></p>
      ${foto}
      <p class="artigo__chamada"><strong>${esc(c.chamada)}.</strong> ${esc(c.resumo)}</p>
      ${c.descricao.map((p) => `<p class="artigo__texto">${esc(p)}</p>`).join("\n      ")}
      <h2 class="artigo__subtitulo">Onde está o caso</h2>
      <p class="artigo__texto">${esc(c.status)}</p>
      <button class="pilula pilula--cheia artigo__story" type="button" data-caso="${c.slug}">Ver em stories</button>
      <h2 class="artigo__subtitulo">Fontes</h2>
      <ul class="artigo__fontes">${fontes}</ul>
      <h2 class="artigo__subtitulo">Outros casos</h2>
      <ul class="artigo__outros">${outros}</ul>
    </article>`;
}

/** Dados estruturados da pagina do caso. */
export function jsonLdArtigo(c, site) {
  const capa = c.fotos?.[0];
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.titulo,
      description: `${c.chamada}: ${c.resumo}`,
      inLanguage: "pt-BR",
      dateModified: ATUALIZADO,
      mainEntityOfPage: `${site}/c/${c.slug}/`,
      ...(capa ? { image: `${site}${capa.src}` } : {}),
      about: { "@type": "Person", name: "Flávio Bolsonaro" },
      publisher: { "@type": "Organization", name: NOME, url: `${site}/` },
      citation: c.fontes,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: NOME, item: `${site}/` },
        { "@type": "ListItem", position: 2, name: c.titulo, item: `${site}/c/${c.slug}/` },
      ],
    },
  ];
}

export const scriptJsonLd = (dados) =>
  dados.map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, "\\u003c")}</script>`).join("\n    ");
