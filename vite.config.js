import { defineConfig } from "vite";

// BASE_PATH = pasta do site no servidor. No GitHub Pages de projeto e
// "/flavio-ja-foi-preso/" (o workflow passa); em desenvolvimento, "/".
const BASE = process.env.BASE_PATH ?? "/";
// SITE_URL = endereco publico com a pasta, para canonical e dados
// estruturados. Vazio em desenvolvimento.
const SITE = (process.env.SITE_URL ?? "").replace(/\/$/, "");

/* Escreve o conteudo no index.html (linha do tempo, casos, perguntas e
   dados estruturados), para o buscador ler o texto sem depender do JS.
   Em desenvolvimento, carrega os dados de novo a cada pedido. */
function conteudoNoHtml() {
  let servidor;
  return {
    name: "conteudo-no-html",
    configureServer(s) { servidor = s; },
    async transformIndexHtml(html) {
      const r = servidor
        ? await servidor.ssrLoadModule("/src/scripts/render.js")
        : await import("./src/scripts/render.js");
      const seo = SITE
        ? `<link rel="canonical" href="${SITE}/" />\n    <meta property="og:url" content="${SITE}/" />\n    ${r.scriptJsonLd(r.jsonLdInicio(SITE))}`
        : r.scriptJsonLd(r.jsonLdInicio(""));
      return html
        .replace("<!--seo-->", seo)
        .replace("<!--fatos-->", r.htmlFatos())
        .replace("<!--secoes-->", r.htmlSecoes(BASE))
        .replace("<!--perguntas-->", r.htmlPerguntas());
    },
  };
}

/* Google Analytics, so no build: as visitas do servidor de
   desenvolvimento nao entram na conta. As paginas de caso copiam o
   <head> do dist/index.html e herdam o script. */
const GA_ID = "G-L8DKQM11G9";
function analytics() {
  return {
    name: "analytics",
    apply: "build",
    transformIndexHtml(html) {
      const tag = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "${GA_ID}");
    </script>`;
      // Logo depois do charset, que precisa vir primeiro.
      const charset = '<meta charset="utf-8" />';
      return html.replace(charset, `${charset}\n    ${tag}`);
    },
  };
}

export default defineConfig({
  base: BASE,
  plugins: [conteudoNoHtml(), analytics()],
});
