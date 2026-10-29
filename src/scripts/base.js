/**
 * Endereco base do site. Na raiz em desenvolvimento ("/"); no GitHub Pages
 * o site mora em /flavio-ja-foi-preso/ (BASE_PATH no build, ver
 * vite.config.js). Os caminhos do JS e de casos.js comecam com "/" e
 * passam por caminho() para ganhar a base; os do index.html o Vite
 * reescreve sozinho.
 */
export const BASE = import.meta.env.BASE_URL;

export const caminho = (p) => (p.startsWith("/") ? BASE + p.slice(1) : p);
