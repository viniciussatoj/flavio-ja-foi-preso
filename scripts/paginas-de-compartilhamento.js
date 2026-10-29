/**
 * Depois do vite build: uma pagina por caso, o sitemap e o robots.txt.
 *
 * dist/c/<slug>/index.html e a pagina do caso, com o texto inteiro, a foto
 * de capa, o status, as fontes e os dados estruturados (Article). Usa o
 * dist/index.html como molde, entao herda o CSS, o JS e os dialogs do
 * story: o "Ver em stories" e o ?story dos links compartilhados abrem o
 * story por cima. E tambem a pagina que o buscador indexa para cada caso
 * e que as redes leem para montar a previa do link.
 *
 * SITE_URL e o endereco publico com a pasta (ex.: https://usuario.github.io/
 * projeto) e BASE_PATH a pasta sozinha (/projeto/), a mesma do
 * vite.config.js.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { ATUALIZADO, CASOS } from "../src/data/casos.js";
import { esc, htmlArtigo, jsonLdArtigo, scriptJsonLd } from "../src/scripts/render.js";

const SITE = (process.env.SITE_URL ?? "").replace(/\/$/, "");
const BASE = process.env.BASE_PATH ?? "/";
if (!SITE) console.warn("! SITE_URL vazio: canonical, previas e sitemap vao sair sem endereco absoluto.");

const molde = readFileSync("dist/index.html", "utf8");
const rodape = molde.match(/<footer class="rodape">[\s\S]*?<\/footer>/)?.[0] ?? "";

function trocarMeta(html, atributo, nome, valor) {
  const re = new RegExp(`<meta ${atributo}="${nome}" content="[^"]*" />`);
  const tag = `<meta ${atributo}="${nome}" content="${esc(valor)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
}

for (const c of CASOS) {
  const titulo = `${c.titulo} | Flávio Bolsonaro`;
  const descricao = `${c.chamada}. ${c.resumo}`;
  const url = `${SITE}/c/${c.slug}/`;
  const capa = c.fotos?.[0]?.src;

  let html = molde
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(titulo)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "")
    .replace(/<!--inicio-pagina-->[\s\S]*<!--fim-pagina-->/, `<main class="pagina pagina--caso">${htmlArtigo(c, BASE)}\n      ${rodape}\n    </main>`);
  html = trocarMeta(html, "name", "description", descricao);
  html = trocarMeta(html, "property", "og:type", "article");
  html = trocarMeta(html, "property", "og:title", `${c.chamada} | Flávio já está preso?`);
  html = trocarMeta(html, "property", "og:description", c.resumo);
  html = trocarMeta(html, "property", "og:url", url);
  html = trocarMeta(html, "name", "twitter:card", capa ? "summary_large_image" : "summary");
  if (capa) html = trocarMeta(html, "property", "og:image", `${SITE}${capa}`);
  html = html.replace("</head>", `    ${SITE ? `<link rel="canonical" href="${url}" />\n    ` : ""}${scriptJsonLd(jsonLdArtigo(c, SITE))}\n  </head>`);

  mkdirSync(`dist/c/${c.slug}`, { recursive: true });
  writeFileSync(`dist/c/${c.slug}/index.html`, html);
}

// Sitemap e robots: o buscador acha a pagina inicial e todos os casos.
const urls = [`${SITE}/`, ...CASOS.map((c) => `${SITE}/c/${c.slug}/`)];
writeFileSync("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${ATUALIZADO}</lastmod></url>`).join("\n")}
</urlset>
`);
writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`${CASOS.length} páginas de caso, sitemap.xml e robots.txt em dist/`);
