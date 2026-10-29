/**
 * Compartilhar um caso (ou o site) nas redes.
 *
 * Cada caso tem um endereco proprio, /c/<slug>/: a pagina do caso, com o
 * texto inteiro e as tags de previa (og:*). As paginas saem do build
 * (scripts/paginas-de-compartilhamento.js); a previa do WhatsApp e do X
 * so le HTML, nao o JS nem o #.
 *
 * Instagram e TikTok nao tem link de compartilhar na web: no celular eles
 * aparecem na folha nativa ("Mais opcoes"); no computador o link e
 * copiado para colar.
 */

import { BASE } from "./base.js";

const enc = encodeURIComponent;

const REDES = [
  { nome: "WhatsApp", link: (u, t) => `https://wa.me/?text=${enc(`${t} ${u}`)}` },
  { nome: "Instagram", acao: (u, t) => instagram(t, u) },
  { nome: "X", link: (u, t) => `https://x.com/intent/post?text=${enc(t)}&url=${enc(u)}` },
  { nome: "Facebook", link: (u) => `https://www.facebook.com/sharer/sharer.php?u=${enc(u)}` },
  { nome: "Threads", link: (u, t) => `https://www.threads.net/intent/post?text=${enc(`${t} ${u}`)}` },
  { nome: "Bluesky", link: (u, t) => `https://bsky.app/intent/compose?text=${enc(`${t} ${u}`)}` },
  { nome: "Telegram", link: (u, t) => `https://t.me/share/url?url=${enc(u)}&text=${enc(t)}` },
  { nome: "LinkedIn", link: (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${enc(u)}` },
  { nome: "Reddit", link: (u, t) => `https://www.reddit.com/submit?url=${enc(u)}&title=${enc(t)}` },
  { nome: "E-mail", link: (u, t) => `mailto:?subject=${enc(t)}&body=${enc(`${t}\n\n${u}`)}` },
];

const dialog = document.getElementById("compartilhar");
const lista = document.getElementById("compartilhar-redes");
const aviso = document.getElementById("aviso");

let tempoAviso = 0;

export function avisar(texto) {
  aviso.textContent = texto;
  // Mostrar de novo traz o popover para cima de um dialog aberto depois.
  if (aviso.matches(":popover-open")) aviso.hidePopover();
  aviso.showPopover();
  requestAnimationFrame(() => aviso.setAttribute("data-visivel", ""));
  clearTimeout(tempoAviso);
  tempoAviso = setTimeout(() => {
    aviso.removeAttribute("data-visivel");
    setTimeout(() => aviso.matches(":popover-open") && aviso.hidePopover(), 200);
  }, 2200);
}

async function copiar(url) {
  try {
    await navigator.clipboard.writeText(url);
    avisar("Link copiado");
  } catch {
    prompt("Copie o link:", url);
  }
}

/** Endereco de compartilhamento: do caso ou da pagina inicial. */
export function urlDe(slug) {
  // ?story abre o story ao chegar; sem ele, a pagina do caso abre como texto.
  return slug ? `${location.origin}${BASE}c/${slug}/?story` : `${location.origin}${BASE}`;
}

function botao(rotulo, aoClicar) {
  const li = document.createElement("li");
  const b = document.createElement("button");
  b.type = "button";
  b.textContent = rotulo;
  b.addEventListener("click", aoClicar);
  li.append(b);
  return li;
}

/** Abre a janela de redes para um texto e um endereco. */
export function compartilhar({ titulo, url }) {
  lista.replaceChildren();
  for (const r of REDES) {
    if (r.acao) {
      lista.append(botao(r.nome, () => r.acao(url, titulo)));
      continue;
    }
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = r.link(url, titulo);
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = r.nome;
    a.addEventListener("click", () => dialog.close());
    li.append(a);
    lista.append(li);
  }
  lista.append(botao("Copiar link", () => copiar(url)));
  if (navigator.share) {
    lista.append(botao("Mais opções", async () => {
      try { await navigator.share({ title: titulo, text: titulo, url }); } catch { /* cancelado */ }
    }));
  }
  dialog.showModal();
}

/* Instagram nao aceita link vindo da web: a folha nativa do celular
   chega ate ele; no computador, o link vai para a area de transferencia. */
async function instagram(titulo, url) {
  if (navigator.share && matchMedia("(pointer: coarse)").matches) {
    try { await navigator.share({ title: titulo, text: titulo, url }); } catch { /* cancelado */ }
    return;
  }
  await copiar(url);
  avisar("Link copiado. Cole no Instagram");
}

dialog.querySelector(".compartilhar__fechar").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
