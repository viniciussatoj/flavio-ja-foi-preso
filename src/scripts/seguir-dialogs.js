/**
 * Ferramentas de edicao (InterfaceKit e o painel do DialKit) por cima
 * dos <dialog> modais.
 *
 * O story e a janela de compartilhar abrem com showModal(): ficam na
 * camada do topo e deixam inerte tudo o que esta fora deles. As
 * ferramentas montam o proprio container no fim do body, entao paravam de
 * receber hover e clique justo quando se edita o story. Enquanto um modal
 * esta aberto, os containers moram dentro dele; quando fecha, voltam para
 * o body. Mover o no preserva os eventos.
 */

const FERRAMENTAS = ".dialkit-root, [data-interface-kit]";

export function seguirDialogs() {
  const dialogs = [...document.querySelectorAll("dialog")];

  const levar = () => {
    // O ultimo aberto e o que esta por cima (o de compartilhar sobre o story).
    const aberto = dialogs.filter((d) => d.open && d.matches(":modal")).at(-1);
    const destino = aberto ?? document.body;
    // So os containers de primeiro nivel: os que estao no body ou num dialog.
    const raizes = [...document.querySelectorAll(FERRAMENTAS)].filter(
      (el) => el.parentElement === document.body || el.parentElement?.tagName === "DIALOG",
    );
    for (const el of raizes) if (el.parentElement !== destino) destino.append(el);
  };

  const observador = new MutationObserver(levar);
  for (const d of dialogs) observador.observe(d, { attributes: true, attributeFilter: ["open"] });
  // As ferramentas podem montar depois desta chamada.
  observador.observe(document.body, { childList: true });
  levar();
}
