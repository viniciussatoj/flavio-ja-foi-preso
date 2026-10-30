/**
 * Conteudo do site. Fonte unica: acusacoes-flavio-bolsonaro.md.
 *
 * Cada caso vira uma entrada na aba "Acusacoes e suspeitas" e um story.
 * O story monta os cartoes sozinho a partir destes campos (ver
 * src/scripts/story.js): capa com a chamada, um cartao por paragrafo
 * da descricao, o status e as fontes. Mais texto = mais cartoes.
 *
 * fotos: uma por cartao, na ordem do story (capa, cada paragrafo da
 * descricao, status, fontes). Cada uma com alt, credito, o link da
 * licenca quando ela e livre e a pagina de origem. Os direitos das fotos
 * de materias ainda precisam ser confirmados (ver creditos-fotos.md).
 */

/** Data da ultima revisao do conteudo (vai para as paginas e o sitemap). */
export const ATUALIZADO = "2026-10-29";

/**
 * Perguntas frequentes: aparecem no fim da pagina e viram dados
 * estruturados (FAQPage). O Google exige que o texto seja o mesmo que o
 * visitante ve, entao mude aqui e nao so no HTML.
 */
export const PERGUNTAS = [
  {
    pergunta: "Flávio Bolsonaro já foi preso?",
    resposta: "Não. Até 29 de outubro de 2026, Flávio Bolsonaro não foi preso nem condenado criminalmente. Ele é investigado em dois inquéritos no STF e, na noite de 27 de outubro de 2026, deixou o Brasil rumo aos Estados Unidos, apesar de uma ordem do ministro Alexandre de Moraes que o proibia de sair do país.",
  },
  {
    pergunta: "Por que Flávio Bolsonaro saiu do Brasil?",
    resposta: "No inquérito que apura lavagem de dinheiro com o advogado Willer Tomaz, Moraes mandou Flávio entregar os passaportes e o proibiu de deixar o país. O prazo venceu sem a entrega e ele saiu por Puerto Iguazú, na Argentina, de onde voou para Miami. A imprensa atribui a saída, em parte, ao medo de uma prisão; aliados dizem que ele quis evitar virar moeda de troca.",
  },
  {
    pergunta: "De quais crimes Flávio Bolsonaro é acusado?",
    resposta: "Em 2020, o Ministério Público do Rio o denunciou por peculato, lavagem de dinheiro e organização criminosa no caso da rachadinha, arquivado em 2022 após a anulação das provas. Em 2026, ele é investigado no STF por lavagem de dinheiro, evasão de divisas e corrupção no caso do Banco Master e do filme Dark Horse, e por lavagem de dinheiro com o advogado Willer Tomaz. A Polícia Federal também concluiu que ele cometeu calúnia contra Lula. Flávio nega todas as acusações.",
  },
  {
    pergunta: "O que é o caso da rachadinha de Flávio Bolsonaro?",
    resposta: "Segundo o MPRJ, servidores do gabinete de Flávio na Alerj devolviam parte dos salários por meio do ex-assessor Fabrício Queiroz, num desvio estimado em R$ 6 milhões entre 2007 e 2018. Flávio foi denunciado em 2020, mas o STJ e o STF anularam provas e o TJ-RJ arquivou a denúncia em 2022.",
  },
  {
    pergunta: "Qual a relação de Flávio Bolsonaro com o Banco Master?",
    resposta: "Mensagens reveladas em 2026 mostram Flávio negociando R$ 134 milhões com Daniel Vorcaro, dono do Banco Master, para financiar o filme Dark Horse, sobre Jair Bolsonaro; ao menos R$ 61 milhões foram transferidos. O STF investiga o caso. Flávio admitiu o pedido, mas diz que o patrocínio era privado.",
  },
];

// Mais recente no topo.
export const SECOES = [
  { id: "master", rotulo: "Caso Banco Master e investigações de 2026" },
  { id: "eleitoral", rotulo: "Casos eleitorais e crimes contra a honra" },
  { id: "senado", rotulo: "Período como senador (Senado, 2019–2026)" },
  { id: "alerj", rotulo: "Como deputado estadual (Alerj, 2003–2018)" },
];

/** Etiquetas do campo situacao de cada caso. "Sem desfecho": houve apuracao, mas nao
 *  se sabe como terminou. "Sem investigacao": so reportagem ou pedido. */
export const SITUACOES = {
  aberta: "Investigação aberta",
  encerrada: "Encerrada",
  "sem-desfecho": "Sem desfecho conhecido",
  "sem-investigacao": "Sem investigação formal",
};

/** Os fatos mais recentes, do mais novo para o mais antigo. */
export const LINHA_DO_TEMPO = [
  {
    frase: "Mas já fugiu do país.",
    data: "27/10/2026",
    fontes: [
      "https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/flavio-bolsonaro-fugiu-para-os-eua-diz-agencia-reuters",
      "https://www.aosfatos.org/noticias/o-que-se-sabe-suposta-fuga-flavio-bolsonaro/",
      "https://www.cnnbrasil.com.br/politica/o-que-se-sabe-sobre-a-saida-de-flavio-bolsonaro-do-brasil/",
    ],
  },
  {
    frase: "Mas já perdeu o passaporte.",
    data: "25/10/2026",
    fontes: [
      "https://cartacapital.com.br/politica/flavio-bolsonaro-diz-que-foi-intimado-a-entregar-passaporte-e-acusa-pf-de-intimidacao",
      "https://www.aosfatos.org/noticias/o-que-se-sabe-suposta-fuga-flavio-bolsonaro/",
    ],
  },
  {
    frase: "Mas já perdeu a eleição.",
    data: "25/10/2026",
    fontes: [
      "https://www.brasildefato.com.br/2026/10/26/sem-foro-privilegiado-e-na-mira-da-justica-flavio-bolsonaro-ficara-sem-cargo-publico-a-partir-de-2027/",
    ],
  },
  {
    frase: "Mas já é alvo de um segundo inquérito no STF.",
    data: "19/10/2026",
    fontes: [
      "https://www.correiodamanha.com.br/politica/2026/10/328299-stf-abre-inquerito-contra-flavio-e-willer-tomaz-por-suspeita-de-lavagem-de-dinheiro.html",
      "https://www.congressoemfoco.com.br/noticia/123352/flavio-e-alvo-de-inquerito-na-pf-por-suspeita-de-lavagem-de-dinheiro",
    ],
  },
  {
    frase: "Mas já é investigado pelo dinheiro do Banco Master.",
    data: "11/09/2026",
    fontes: [
      "https://g1.globo.com/politica/noticia/2026/09/11/flavio-bolsonaro-e-investigado-em-inquerito-da-pf-aberto-para-apurar-financiamento-do-filme-dark-horse.ghtml",
      "https://www.bbc.com/portuguese/articles/clyp4zgr3llo",
    ],
  },
  {
    frase: "Mas a PF já concluiu que ele cometeu calúnia.",
    data: "26/06/2026",
    fontes: [
      "https://www.band.com.br/politica/noticias/pf-conclui-que-flavio-bolsonaro-cometeu-calunia-contra-lula-nas-redes-202606261944",
    ],
  },
];

export const CASOS = [
  {
    slug: "rachadinha",
    secao: "alerj",
    fotos: [
      { src: "/img/casos/rachadinha-0.jpg", alt: "Palácio Tiradentes, sede da Alerj no período do caso, no Rio de Janeiro", credito: "Wilfredor/Wikimedia Commons (CC0)", licenca: "https://creativecommons.org/publicdomain/zero/1.0/", origem: "https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_Tiradentes,_Rio_de_Janeiro,_Brazil.jpg", w: 3840, h: 2550 },
      { src: "/img/casos/rachadinha-1.webp", alt: "Flávio Bolsonaro e Fabrício Queiroz", credito: "Poder360", origem: "https://www.poder360.com.br/brasil/queiroz-diz-que-wassef-o-protegeu-em-atibaia-contra-ameacas-de-morte/", w: 1456, h: 1080 },
      { src: "/img/casos/rachadinha-2.webp", alt: "O advogado Frederick Wassef, em cuja casa Queiroz foi preso", credito: "Poder360", origem: "https://poder360.com.br/justica/advogado-de-bolsonaro-diz-que-nao-escondeu-queiroz-e-nega-ser-o-anjo/", w: 3000, h: 2000 },
      { src: "/img/casos/rachadinha-3.jpg", alt: "O ministro Gilmar Mendes, do STF", credito: "Fabio Rodrigues Pozzebom/ABr/Wikimedia Commons (CC BY 3.0 br)", licenca: "https://creativecommons.org/licenses/by/3.0/br/", origem: "https://commons.wikimedia.org/wiki/File:Gilmar_Mendes.jpg", w: 2480, h: 1772 },
      { src: "/img/casos/rachadinha-4.webp", alt: "Flávio Bolsonaro", credito: "Poder360", origem: "https://www.poder360.com.br/justica/mprj-entra-com-recurso-para-retomar-caso-das-rachadinhas/", w: 1528, h: 1018 },
    ],
    titulo: "Esquema da \"rachadinha\" no gabinete da Alerj (Caso Queiroz)",
    periodo: "2007–2018",
    situacao: "encerrada",
    novidade: "2025-02",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "R$ 1,2 milhão na conta de Queiroz",
      "Salários devolvidos ao gabinete",
      "Anulado e arquivado",
    ],
    chamada: "R$ 6 milhões e um assessor \"milionário\"",
    resumo: "Como o motorista de um deputado movimentou R$ 1,2 milhão? O MPRJ diz que os salários do gabinete voltavam para o chefe e denunciou Flávio por peculato e organização criminosa. As provas acabaram anuladas, e o caso foi arquivado.",
    descricao: [
      "Em dezembro de 2018, um relatório do Coaf apontou R$ 1,2 milhão em movimentações atípicas na conta de Fabrício Queiroz, ex-assessor e motorista de Flávio. O Coaf também registrou 48 depósitos fracionados, num total de R$ 96 mil, em um mês na conta do próprio Flávio.",
      "O MPRJ concluiu que servidores do gabinete devolviam parte dos salários. Em 2020, denunciou Flávio, Queiroz e mais 15 pessoas por peculato, lavagem de dinheiro, organização criminosa e apropriação indébita, com desvio estimado em cerca de R$ 6 milhões. Queiroz foi preso em junho de 2020 numa casa do advogado Frederick Wassef em Atibaia (SP).",
    ],
    status: "Em 2021, o STJ anulou as quebras de sigilo e o STF anulou decisões do juiz de primeira instância. Em maio de 2022, o TJ-RJ arquivou a denúncia a pedido do próprio MP. Em fevereiro de 2025, Gilmar Mendes negou recursos para reabrir a ação. Uma nova denúncia continua possível se surgirem novas provas.",
    fontes: [
      "https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/01/18/coaf-aponta-que-em-1-mes-foram-feitos-48-depositos-suspeitos-a-flavio-bolsonaro-no-total-de-r-96-mil.ghtml",
      "https://www.diariodepernambuco.com.br/noticia/politica/2020/11/flavio-bolsonaro-e-denunciado-por-organizacao-criminosa-peculato-lav.html",
      "https://www.infomoney.com.br/politica/tj-do-rio-arquiva-denuncia-do-mp-contra-flavio-bolsonaro-em-caso-das-rachadinhas/",
      "https://www.conjur.com.br/2022-mai-16/tj-rj-arquiva-denuncia-flavio-bolsonaro-rachadinha",
      "https://www.poder360.com.br/poder-justica/gilmar-nega-pedido-para-reabrir-acao-contra-flavio-por-rachadinha/",
    ],
  },
  {
    slug: "imoveis",
    secao: "alerj",
    fotos: [
      { src: "/img/casos/imoveis-0.jpg", alt: "Praia de Copacabana, bairro onde ficavam as duas quitinetes", credito: "Rodrigo Soldon/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Praia_de_Copacabana_(3918862501).jpg", w: 3264, h: 2448 },
      { src: "/img/casos/imoveis-1.jpg", alt: "Flávio Bolsonaro, então senador eleito, no plenário do Senado", credito: "Roque de Sá/Agência Senado/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_(45269058085).jpg", w: 3840, h: 2560 },
      { src: "/img/casos/imoveis-2.jpg", alt: "Calçadão de Copacabana", credito: "Ricardo Castro Santos/Wikimedia Commons (CC BY-SA 2.0)", licenca: "https://creativecommons.org/licenses/by-sa/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Copacabana_Cal%C3%A7ad%C3%A3o_(3289871579).jpg", w: 2592, h: 1944 },
      { src: "/img/casos/imoveis-3.jpg", alt: "Flávio Bolsonaro concede entrevista", credito: "Agência Senado/Wikimedia Commons (CC BY 4.0)", licenca: "https://creativecommons.org/licenses/by/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Entrevistas_Diversas_-_Senador_Fl%C3%A1vio_Bolsonaro_(PL-RJ)_(54611269923).jpg", w: 3602, h: 2401 },
      { src: "/img/casos/imoveis-4.jpg", alt: "Copacabana à noite", credito: "Wilfredor/Wikimedia Commons (CC0)", licenca: "https://creativecommons.org/publicdomain/zero/1.0/", origem: "https://commons.wikimedia.org/wiki/File:Copacabana_Beach_at_night,_Rio_de_Janeiro,_Brazil.jpg", w: 3840, h: 2560 },
    ],
    titulo: "Lavagem de dinheiro com a compra e venda de imóveis",
    periodo: "2010–2017",
    situacao: "encerrada",
    novidade: "2022-05",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "19 imóveis e R$ 3,8 milhões de lucro",
      "R$ 638 mil em dinheiro vivo",
      "Arquivado com a rachadinha",
    ],
    chamada: "19 imóveis e dinheiro vivo na mesa",
    resumo: "Duas quitinetes em Copacabana foram compradas com R$ 638 mil em espécie e revendidas com lucro de mais de R$ 800 mil em pouco mais de um ano. Para o MP, era lavagem de dinheiro. Leia como o caso terminou.",
    descricao: [
      "Em janeiro de 2018, a Folha revelou que Flávio comprou 19 imóveis por R$ 9,4 milhões e lucrou R$ 3,8 milhões com eles.",
      "O MP apontou que, em 2012, Flávio e a esposa pagaram R$ 638 mil em dinheiro vivo por dois imóveis em Copacabana e os revenderam com lucro de mais de R$ 800 mil em cerca de um ano. Para os promotores, era uma forma de lavar recursos da rachadinha. Flávio afirma que foram negócios legais.",
    ],
    status: "O caso fazia parte da denúncia da rachadinha e foi arquivado junto com ela.",
    fontes: [
      "https://www.infomoney.com.br/?p=1377445",
      "https://www.jb.com.br/pais/2019/12/1021016-mp-rj-diz-que-flavio--lavou--r--638-mil-em-compra-de-imoveis-com-dinheiro-vivo.html",
      "https://www.bandab.com.br/nacional/flavio-comprou-19-imoveis-por-r-9-mi-diz-mp-ao-pedir-quebra-de-sigilo-afirma-revista/",
    ],
  },
  {
    slug: "kopenhagen",
    secao: "alerj",
    fotos: [
      { src: "/img/casos/kopenhagen-0.jpg", alt: "Via Parque Shopping, na Barra da Tijuca, onde ficava a loja", credito: "Arthur Jacob/Wikimedia Commons (CC BY 3.0)", licenca: "https://creativecommons.org/licenses/by/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Via_Parque_Shopping_1.jpg", w: 1656, h: 1242 },
      { src: "/img/casos/kopenhagen-1.jpg", alt: "Loja da Kopenhagen num shopping do Rio de Janeiro", credito: "Eduardo P/Wikimedia Commons (CC BY-SA 3.0)", licenca: "https://creativecommons.org/licenses/by-sa/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Kopenhagen_-_Botafogo_Praia_Shopping.jpg", w: 3840, h: 2880 },
      { src: "/img/casos/kopenhagen-2.jpg", alt: "Fachada de uma chocolateria Kopenhagen no Rio de Janeiro", credito: "Eduardo P/Wikimedia Commons (CC BY-SA 3.0)", licenca: "https://creativecommons.org/licenses/by-sa/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Kopenhagen_-_Copacabana.jpg", w: 1920, h: 2560 },
      { src: "/img/casos/kopenhagen-3.jpg", alt: "Salão Nobre do Superior Tribunal de Justiça", credito: "Superior Tribunal de Justiça STJ/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio-sede_e_Instala%C3%A7%C3%B5es_do_STJ_(50086605278).jpg", w: 3496, h: 2333 },
      { src: "/img/casos/kopenhagen-4.jpg", alt: "Flávio Bolsonaro concede entrevista no Senado", credito: "Senado Federal/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Entrevista_senador_Fl%C3%A1vio_Bolsonaro_-_55240860576.jpg", w: 3840, h: 2565 },
    ],
    titulo: "Loja de chocolates Kopenhagen (Bolsotini) usada para lavagem",
    periodo: "2014–2018",
    situacao: "encerrada",
    novidade: "2022-05",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "R$ 2,1 milhões em chocolate",
      "Notas fiscais fraudadas?",
      "Provas anuladas",
    ],
    chamada: "A loja de chocolates sob suspeita",
    resumo: "Uma franquia Kopenhagen teria servido para \"legalizar\" R$ 2,1 milhões, segundo o MP. Um ex-sócio fala em notas fiscais fraudadas. Veja o que a investigação encontrou.",
    descricao: [
      "O MP suspeitou que a franquia Kopenhagen de Flávio, no Rio, foi usada para \"legalizar\" pelo menos R$ 2,1 milhões. Segundo a investigação, R$ 500 mil foram ocultados na compra da loja e R$ 1,6 milhão circulou de forma suspeita na conta da empresa.",
      "Um ex-sócio afirmou que a loja fraudava notas fiscais. Flávio chamou as acusações de \"alucinação\" de promotores.",
    ],
    status: "As provas foram anuladas pelo STJ e o caso foi arquivado junto com a rachadinha.",
    fontes: [
      "https://www.opovo.com.br/noticias/politica/2020/08/20/investigacao-apura-se-loja-de-flavio-bolsonaro--lavou--r--2-1-milhoes.html",
      "https://www.poder360.com.br/brasil/flavio-bolsonaro-entrega-loja-de-chocolates-investigada-pelo-mp/",
    ],
  },
  {
    slug: "fantasmas-alerj",
    secao: "alerj",
    fotos: [
      { src: "/img/casos/fantasmas-alerj.jpg", alt: "Flávio Bolsonaro numa comissão do Senado", credito: "Waldemir Barreto/Agência Senado" },
      { src: "/img/casos/fantasmas-alerj-1.jpg", alt: "Mesas dos parlamentares no plenário do Palácio Tiradentes", credito: "Halley Pacheco de Oliveira/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Pal%C3%A1cio_Tiradentes_03.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/fantasmas-alerj-2.jpg", alt: "Cúpula do plenário do Palácio Tiradentes, sede da Alerj", credito: "Halley Pacheco de Oliveira/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Pal%C3%A1cio_Tiradentes_02.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/fantasmas-alerj-3.webp", alt: "Flávio Bolsonaro", credito: "Poder360", origem: "https://www.poder360.com.br/brasil/flavio-bolsonaro-tinha-funcionaria-fantasma-diz-viuva-de-ex-pm/", w: 1955, h: 1080 },
      { src: "/img/casos/fantasmas-alerj-4.jpg", alt: "Flávio Bolsonaro em pronunciamento no Senado", credito: "Carlos Moura/Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_-_55210179514.jpg", w: 3840, h: 2560 },
    ],
    titulo: "Funcionários fantasmas no gabinete da Alerj",
    periodo: "2007–2018",
    situacao: "sem-desfecho",
    novidade: "2022",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Assessores que não iam à Alerj",
      "A mãe e a ex-mulher do miliciano",
      "Sem desfecho conhecido",
    ],
    chamada: "Assessores que nunca apareciam",
    resumo: "A localização dos celulares indica que alguns funcionários quase nunca iam à Alerj. Entre eles estariam a mãe e a ex-mulher de um miliciano. Quem eram os supostos fantasmas?",
    descricao: [
      "O MP abriu um inquérito separado para apurar se o gabinete empregava pessoas que não trabalhavam. Os dados de localização dos celulares de alguns assessores indicavam que eles quase nunca iam à Alerj.",
      "Entre os casos citados estão a mãe e a ex-mulher do miliciano Adriano da Nóbrega. Em 2022, veio a público um áudio de 2019 em que a viúva de Adriano dizia que a ex-mulher dele era funcionária fantasma.",
    ],
    status: "O caso se misturou ao da rachadinha e foi afetado pelas mesmas anulações. Não há desfecho próprio conhecido.",
    fontes: [
      "https://www.moneytimes.com.br/flavio-bolsonaro-e-alvo-em-novo-inquerito-do-mp-do-rj-sobre-funcionarios-fantasmas/",
      "https://www.cnnbrasil.com.br/politica/mp-cita-localizacao-de-celulares-de-funcionarios-fantasmas-de-flavio-bolsonaro/",
      "https://www.poder360.com.br/brasil/flavio-bolsonaro-tinha-funcionaria-fantasma-diz-viuva-de-ex-pm/",
    ],
  },
  {
    slug: "fantasma-camara",
    secao: "alerj",
    fotos: [
      { src: "/img/casos/fantasma-camara-0.jpg", alt: "Congresso Nacional, em Brasília; a cúpula côncava abriga o plenário da Câmara", credito: "Senado Federal/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Fachada_do_Congresso_Nacional_(48079663532).jpg", w: 1920, h: 2560 },
      { src: "/img/casos/fantasma-camara-1.jpg", alt: "Prédio da Universidade Candido Mendes, no Rio de Janeiro", credito: "nicholasbittencourt/Wikimedia Commons (CC BY-SA 2.0)", licenca: "https://creativecommons.org/licenses/by-sa/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Universidade_Candido_Mendes.jpg", w: 960, h: 1440 },
      { src: "/img/casos/fantasma-camara-2.jpg", alt: "Jair Bolsonaro como deputado federal na Câmara", credito: "Fabio Rodrigues Pozzebom/Agência Brasil/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Jair_Bolsonaro_-_EBC_01.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/fantasma-camara-3.jpg", alt: "Plenário da Câmara dos Deputados", credito: "Senado Federal/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Congresso_(44744084370).jpg", w: 1920, h: 1280 },
    ],
    titulo: "Funcionário fantasma na Câmara dos Deputados",
    periodo: "2000–2002",
    situacao: "sem-investigacao",
    novidade: "2002",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Em Brasília e no Rio ao mesmo tempo",
      "Nunca investigado",
    ],
    chamada: "Aos 19 anos, cargo em Brasília e faculdade no Rio",
    resumo: "Como Flávio dava conta de 40 horas semanais na Câmara enquanto estudava e estagiava a mais de mil quilômetros dali? Uma suspeita antiga que voltou à tona em 2026.",
    descricao: [
      "Aos 19 anos, Flávio teria ocupado um cargo comissionado de 40 horas semanais na liderança do PPB em Brasília. Ao mesmo tempo, cursava Direito presencialmente no Rio e fazia estágio.",
    ],
    status: "É uma revelação jornalística. Não houve investigação formal.",
    fontes: [
      "https://www.brasildefato.com.br/2026/10/26/sem-foro-privilegiado-e-na-mira-da-justica-flavio-bolsonaro-ficara-sem-cargo-publico-a-partir-de-2027/",
    ],
  },
  {
    slug: "milicia",
    secao: "alerj",
    fotos: [
      { src: "/img/casos/milicia.jpg", alt: "Flávio Bolsonaro ao celular no plenário do Senado, em 2019", credito: "Pedro França/Agência Senado (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/" },
      { src: "/img/casos/milicia-1.jpg", alt: "Palácio Tiradentes, sede da Alerj, onde Flávio homenageou Adriano da Nóbrega", credito: "Estela Neto/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_Tiradentes_-_Rio_de_Janeiro_-_20220924092846.jpg", w: 1920, h: 2557 },
      { src: "/img/casos/milicia-2.jpg", alt: "Mesa do presidente no plenário do Palácio Tiradentes, onde Adriano foi homenageado", credito: "Halley Pacheco de Oliveira/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Pal%C3%A1cio_Tiradentes_01.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/milicia-3.jpg", alt: "Flávio Bolsonaro", credito: "Vinicius Loures/Câmara dos Deputados", origem: "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/", w: 1984, h: 1223 },
      { src: "/img/casos/milicia-4.jpg", alt: "Igreja Matriz de Esplanada (BA), cidade onde Adriano da Nóbrega foi morto", credito: "Marinelson Almeida - Traveling by Brazil/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Igreja_Matriz_de_Esplanada_Bahia.jpg", w: 3840, h: 2560 },
    ],
    titulo: "Ligações com a milícia e com Adriano da Nóbrega (\"Escritório do Crime\")",
    periodo: "2003–2018",
    situacao: "encerrada",
    novidade: "2026-03",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Medalha para um homem preso",
      "A família do miliciano no gabinete",
      "Flávio fora da nova denúncia",
    ],
    chamada: "Medalha para um homem preso",
    resumo: "Flávio homenageou Adriano da Nóbrega, depois apontado como chefe do \"Escritório do Crime\", enquanto ele estava atrás das grades. A mãe e a ex-mulher de Adriano trabalhavam no gabinete. Entenda a ligação.",
    descricao: [
      "Como deputado, Flávio homenageou o ex-PM Adriano da Nóbrega com uma moção de louvor em 2003 e com a Medalha Tiradentes em 2005, quando Adriano estava preso. Adriano depois foi apontado como chefe do \"Escritório do Crime\" e morreu numa ação policial na Bahia em 2020.",
      "A mãe dele, Raimunda Veras Magalhães, e a ex-mulher, Danielle da Nóbrega, foram nomeadas no gabinete de Flávio. Na denúncia da rachadinha, o MP afirmou que Adriano fazia parte do \"núcleo executivo\" da organização. Flávio atribuiu as nomeações a Queiroz, que confirmou ter feito as indicações.",
    ],
    status: "Não houve condenação de Flávio. Em março de 2026, o MPRJ denunciou Raimunda por lavar dinheiro do filho. Flávio não foi alvo dessa denúncia.",
    fontes: [
      "https://www.jb.com.br/rio/2019/01/974236-flavio-bolsonaro-empregou-mae-e-mulher-de-chefe-do--escritorio-do-crime--em-seu-gabinete--diz-jornal.html",
      "https://www.gazetadopovo.com.br/republica/miliciano-adriano-nobrega-integrava-nucleo-de-grupo-de-flavio-bolsonaro-diz-mp/",
      "https://www.brasildefato.com.br/2026/03/19/mae-de-miliciano-morto-ex-assessora-de-flavio-bolsonaro-e-denunciada-por-lavagem-de-dinheiro/",
    ],
  },
  {
    slug: "furna-da-onca",
    secao: "senado",
    fotos: [
      { src: "/img/casos/furna-da-onca-0.jpg", alt: "Palácio Tiradentes, sede da Alerj, cujos deputados foram alvo da Operação Furna da Onça", credito: "Donatas Dabravolskas/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_Tiradentes_-_Rio_de_Janeiro_-_20220826172929.jpg", w: 3840, h: 2563 },
      { src: "/img/casos/furna-da-onca-1.webp", alt: "O empresário Paulo Marinho fala à imprensa", credito: "CNN Brasil", origem: "https://www.cnnbrasil.com.br/politica/paulo-marinho-diz-que-vai-entregar-celular-para-pericia-da-pf/", w: 1920, h: 1080 },
      { src: "/img/casos/furna-da-onca-2.jpg", alt: "Jair Bolsonaro, já eleito, em novembro de 2018", credito: "U.S. Consulate in Rio/Wikimedia Commons (Public domain)", origem: "https://commons.wikimedia.org/wiki/File:Encontro_do_Assessor_de_Seguran%C3%A7a_Nacional_dos_EUA_John_Bolton_com_Presidente_Eleito_do_Brasil_Jair_Bolsonaro,_foto_em_grupo.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/furna-da-onca-3.webp", alt: "Flávio Bolsonaro", credito: "Poder360", origem: "https://www.poder360.com.br/justica/pf-investigara-possivel-vazamento-de-informacoes-para-flavio-bolsonaro/", w: 4000, h: 2667 },
      { src: "/img/casos/furna-da-onca-4.jpg", alt: "Flávio Bolsonaro discursa na tribuna do Senado", credito: "Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_-_55502955876.jpg", w: 1920, h: 1280 },
    ],
    titulo: "Vazamento da Operação Furna da Onça",
    periodo: "2018",
    situacao: "sem-desfecho",
    novidade: "2020",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Um aviso antes da operação",
      "Operação adiada?",
      "Sem conclusão",
    ],
    chamada: "Aviso antes da operação?",
    resumo: "O próprio suplente de Flávio no Senado diz que ele soube antes de uma operação da PF. Flávio chama a história de \"invenção\". PF e MPF foram atrás.",
    descricao: [
      "Em 2020, Paulo Marinho, empresário e suplente de Flávio no Senado, disse à Folha que Flávio foi avisado por um delegado da PF, durante o segundo turno de 2018, que Queiroz seria alvo da Operação Furna da Onça.",
      "Segundo Marinho, a operação teria sido adiada para não prejudicar a campanha de Jair Bolsonaro. A PF e o MPF abriram apurações. Flávio chamou a história de \"invenção\" e disse que Marinho queria prejudicá-lo para ficar com a vaga.",
    ],
    status: "Um inquérito anterior da PF tinha sido arquivado por falta de provas. Não há conclusão conhecida das apurações de 2020.",
    fontes: [
      "https://www.poder360.com.br/justica/pf-investigara-possivel-vazamento-de-informacoes-para-flavio-bolsonaro/",
      "https://jornaldebrasilia.com.br/noticias/politica-e-poder/mpf-abre-investigacao-para-apurar-suposto-vazamento-da-pf-na-furna-da-onca/",
    ],
  },
  {
    slug: "abin-paralela",
    secao: "senado",
    fotos: [
      { src: "/img/casos/abin-paralela-0.jpg", alt: "Posse de Alexandre Ramagem como diretor-geral da Abin, em 2019", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:11_07_2019_Solenidade_de_Posse_do_Diretor-Geral_da_ABIN,_Alexandre_Ramagem_(48260243406).jpg", w: 3506, h: 2337 },
      { src: "/img/casos/abin-paralela-1.jpg", alt: "Alexandre Ramagem quando era diretor-geral da Abin", credito: "Pablo Valadares/Câmara dos Deputados/Wikimedia Commons (CC BY 3.0)", licenca: "https://creativecommons.org/licenses/by/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Ramagem_Diretor_Abin_(cropped).jpg", w: 1920, h: 2474 },
      { src: "/img/casos/abin-paralela-2.jpg", alt: "O general Augusto Heleno", credito: "Pablo Valadares/Câmara dos Deputados/Wikimedia Commons (CC BY 3.0)", licenca: "https://creativecommons.org/licenses/by/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Augusto_Heleno_(cropped).jpg", w: 1000, h: 1500 },
      { src: "/img/casos/abin-paralela-3.jpg", alt: "Carlos Bolsonaro, indiciado pela PF no caso", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Carlos_Bolsonaro_durante_Encontro_Brasil-R%C3%BAssia_em_2022.jpg", w: 1920, h: 2395 },
      { src: "/img/casos/abin-paralela-4.jpg", alt: "Flávio Bolsonaro no plenário do Senado", credito: "Agência Senado/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_(54397537556).jpg", w: 3840, h: 2560 },
    ],
    titulo: "\"Abin paralela\": uso da Abin em favor da defesa na rachadinha",
    periodo: "2020",
    situacao: "encerrada",
    novidade: "2025-06",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "A Abin a serviço da defesa?",
      "Um áudio contra os auditores",
      "Beneficiário, não indiciado",
    ],
    chamada: "A agência de inteligência a serviço da família?",
    resumo: "Um áudio gravado no Planalto e relatórios da Abin apontam um esforço para anular a investigação contra Flávio. A PF já indiciou mais de 30 pessoas. Ele aparece como beneficiário.",
    descricao: [
      "Em 2020, a revista Época revelou que a Abin teria produzido relatórios para orientar a defesa de Flávio a anular o caso da rachadinha.",
      "Em 2024, a PF divulgou um áudio de agosto de 2020 em que Jair Bolsonaro, Augusto Heleno e Alexandre Ramagem discutem como atingir os auditores da Receita que investigaram Flávio. Segundo a PF, a Abin monitorou esses auditores de forma ilegal. Flávio nega qualquer relação com a Abin.",
    ],
    status: "No relatório final de junho de 2025, a PF indiciou Ramagem, Carlos Bolsonaro e mais de 30 pessoas. Flávio aparece como beneficiário, não como indiciado.",
    fontes: [
      "https://www.poder360.com.br/justica/pf-indica-que-abin-agiu-para-ajudar-flavio-e-renan-bolsonaro/",
      "https://www.brasildefato.com.br/2024/01/29/moraes-reacende-suspeita-sobre-relatorios-da-abin-para-defesa-de-flavio-arquivada-pela-pgr-na-gestao-aras",
      "https://www.infomoney.com.br/?p=2912957",
    ],
  },
  {
    slug: "mansao-brb",
    secao: "senado",
    fotos: [
      { src: "/img/casos/mansao-brb-0.jpg", alt: "Edifício-sede do BRB, em Brasília", credito: "Agência Brasília/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio_sede_do_BRB_(48991222227).jpg", w: 1920, h: 2891 },
      { src: "/img/casos/mansao-brb-1.jpg", alt: "Vista aérea do Lago Paranoá e da Ponte JK; a mansão fica no Lago Sul", credito: "Senado Federal/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Senado_Federal_do_Brasil_Fotos_produzidas_pelo_Senado_(15515921530).jpg", w: 3840, h: 2555 },
      { src: "/img/casos/mansao-brb-2.jpg", alt: "Flávio Bolsonaro concede entrevista", credito: "Senado Federal/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Entrevista_senador_Fl%C3%A1vio_Bolsonaro_-_55240399716.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/mansao-brb-3.jpg", alt: "Edifício-sede do BRB, alvo de auditoria em 2026", credito: "Agência Brasília/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio_sede_do_BRB_(48991221722).jpg", w: 3840, h: 2550 },
      { src: "/img/casos/mansao-brb-4.webp", alt: "Flávio Bolsonaro", credito: "Poder360", origem: "https://www.poder360.com.br/congresso/mp-investiga-emprestimo-do-brb-para-flavio-bolsonaro-comprar-mansao/", w: 2560, h: 1707 },
      { src: "/img/casos/mansao-brb-5.jpg", alt: "Fachada do edifício-sede do BRB, em Brasília", credito: "Agência Brasília/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio_sede_do_BRB_(48991026626).jpg", w: 3840, h: 2550 },
    ],
    titulo: "Mansão de R$ 6 milhões em Brasília e financiamento do BRB",
    periodo: "2021–2026",
    situacao: "aberta",
    novidade: "2026",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Uma casa de R$ 6 milhões",
      "Juros abaixo do normal",
      "Auditoria aponta irregularidades",
      "Ainda em apuração",
    ],
    chamada: "Uma mansão de R$ 6 milhões com juros camaradas",
    resumo: "Flávio financiou a casa num banco público, com juros abaixo dos praticados e renda que parecia insuficiente. Agora a PF apura o caso junto com o escândalo do Banco Master.",
    descricao: [
      "Em 2021, Flávio comprou uma casa no Lago Sul por cerca de R$ 6 milhões. Pagou R$ 2,87 milhões de entrada e financiou R$ 3,1 milhões no BRB, banco público do DF.",
      "Os juros do contrato (3,71% ao ano) ficaram abaixo do que o banco cobrava em operações parecidas, e a renda declarada parecia inferior ao mínimo exigido. Flávio disse que pagou com renda de advogado e com a venda de outros bens.",
      "Em 2026, uma auditoria do BRB apontou irregularidades e a PF incluiu o financiamento nas apurações sobre a relação entre o Banco Master e o BRB.",
    ],
    status: "Em apuração. Não houve denúncia.",
    fontes: [
      "https://www.poder360.com.br/congresso/mp-investiga-emprestimo-do-brb-para-flavio-bolsonaro-comprar-mansao/",
      "https://www.diariodepernambuco.com.br/politica/2026/10/11725606-pf-apura-condicoes-de-financiamento-do-brb-a-flavio-bolsonaro-para-mansao-de-rs-6-milhoes.html",
      "https://brasil.elpais.com/brasil/2021-03-03/mansao-de-flavio-bolsonaro-em-brasilia-o-21-imovel-do-senador-em-16-anos-constrange-o-planalto.html",
    ],
  },
  {
    slug: "dinheiro-vivo",
    secao: "senado",
    fotos: [
      { src: "/img/casos/dinheiro-vivo-0.jpg", alt: "Jair Bolsonaro, então deputado federal", credito: "Fabio Rodrigues Pozzebom/Agência Brasil/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Jair_Bolsonaro_-_EBC_02.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/dinheiro-vivo-1.jpg", alt: "Jair, Carlos e Michelle Bolsonaro na posse de 2019", credito: "J. Batista/Câmara dos Deputados/Wikimedia Commons (CC BY 3.0)", licenca: "https://creativecommons.org/licenses/by/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Jair_Bolsonaro,_Carlos_Bolsonaro,_Hamilton_Mour%C3%A3o_e_Michelle_Bolsonaro.jpg", w: 1920, h: 1257 },
      { src: "/img/casos/dinheiro-vivo-2.jpg", alt: "Jair Bolsonaro em entrevista na TV", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:2019_Presidente_Jair_Bolsonaro_no_Programa_The_Noite_do_SBT_-_47969016056.jpg", w: 1920, h: 1280 },
      { src: "/img/casos/dinheiro-vivo-3.jpg", alt: "Jair Bolsonaro no Palácio do Planalto", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:2020-05-14_Presidente_da_Rep%C3%BAblica,_Jair_Bolsonaro_na_rampa_do_Pal%C3%A1cio_do_Planalto_02.jpg", w: 1920, h: 1280 },
      { src: "/img/casos/dinheiro-vivo-4.jpg", alt: "Jair Bolsonaro em pronunciamento, em 2021", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:2021-03-23_Pronunciamento_do_Presidente_da_Rep%C3%BAblica,_Jair_Bolsonaro_04.jpg", w: 1920, h: 2880 },
    ],
    titulo: "Imóveis da família pagos em dinheiro vivo",
    periodo: "1990–2022",
    situacao: "sem-investigacao",
    novidade: "2022",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "51 imóveis em “moeda corrente”",
      "Reportagem tirada do ar",
      "Nunca investigado",
    ],
    chamada: "51 imóveis pagos em \"moeda corrente\"",
    resumo: "A reportagem sobre o dinheiro vivo nos imóveis da família foi retirada do ar por ordem judicial, a pedido de Flávio. Saiba o que ela revelou.",
    descricao: [
      "Os jornalistas Juliana Dal Piva e Thiago Herdy, do UOL, encontraram 51 imóveis da família Bolsonaro pagos total ou parcialmente em \"moeda corrente\", o que somava R$ 13,5 milhões (R$ 25,6 milhões corrigidos).",
      "Flávio conseguiu na Justiça (TJDFT) uma liminar que obrigou o UOL a retirar a reportagem do ar. A família argumenta que \"moeda corrente\" não significa necessariamente dinheiro em espécie.",
    ],
    status: "É uma revelação jornalística. Não houve investigação formal.",
    fontes: [
      "https://www.opovo.com.br/eleicoes-2022/2022/09/01/veja-como-bolsonaro-e-os-filhos-pagaram-imoveis-com-dinheiro-vivo.html",
      "https://www.agazeta.com.br/brasil/metade-dos-imoveis-da-familia-bolsonaro-foi-adquirida-com-dinheiro-vivo-diz-site-0822",
    ],
  },
  {
    slug: "terreno-de-marinha",
    secao: "senado",
    fotos: [
      { src: "/img/casos/terreno-de-marinha.jpg", alt: "Foto oficial do senador Flávio Bolsonaro", credito: "Agência Senado" },
      { src: "/img/casos/terreno-de-marinha-1.jpg", alt: "Angra dos Reis (RJ)", credito: "Photograph by Mike Peel (www.mikepeel.net)./Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Angra_dos_Reis,_Brazil_2018_134.jpg", w: 3840, h: 2560 },
      { src: "/img/casos/terreno-de-marinha-2.jpg", alt: "Panorama das ilhas de Angra dos Reis", credito: "chensiyuan/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:1_angra_dos_reis_panorama_2010.jpg", w: 3840, h: 1421 },
      { src: "/img/casos/terreno-de-marinha-3.jpg", alt: "Flávio Bolsonaro", credito: "Andressa Anholete/Agência Senado", origem: "https://www.brasil247.com/brasil/derrotado-nas-urnas-flavio-bolsonaro-deve-enfrentar-avanco-de-investigacoes-sobre-dark-horse-e-willer-tomaz", w: 2560, h: 1440 },
    ],
    titulo: "Terreno de marinha obtido por advogado ligado a Flávio",
    periodo: "2022",
    situacao: "sem-investigacao",
    novidade: "2022-07",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Um terreno em Angra e a PEC das Praias",
      "Ficou na reportagem",
    ],
    chamada: "O terreno na praia e o relator da PEC",
    resumo: "Um advogado ligado a Flávio conseguiu, num processo rápido, um terreno de marinha em Angra. Na mesma época, Flávio era o relator da lei sobre esses terrenos. Coincidência?",
    descricao: [
      "Em julho de 2022, um advogado ligado a Flávio teria obtido de forma rápida a posse de um terreno de marinha em Angra dos Reis. Na mesma época, Flávio era o relator da \"PEC das Praias\", que muda as regras desses terrenos. A suspeita é de conflito de interesses.",
    ],
    status: "É uma revelação jornalística. Não há desdobramentos conhecidos.",
    fontes: [
      "https://pt.wikipedia.org/wiki/Flávio_Bolsonaro",
    ],
  },
  {
    slug: "calunia-lula",
    secao: "eleitoral",
    fotos: [
      { src: "/img/casos/calunia-lula-0.jpg", alt: "Flávio Bolsonaro discursa na tribuna do Senado", credito: "Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_-_55503128699.jpg", w: 1920, h: 1280 },
      { src: "/img/casos/calunia-lula-1.jpg", alt: "O ministro Alexandre de Moraes", credito: "Isac Nóbrega/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Ministro_Alexandre_de_Moraes_como_presidente_do_TSE.jpg", w: 1920, h: 2415 },
      { src: "/img/casos/calunia-lula-2.jpg", alt: "Sede da Polícia Federal, em Brasília", credito: "Agência Senado/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Sede_da_Pol%C3%ADcia_Federal_(52830107256).jpg", w: 3840, h: 2162 },
      { src: "/img/casos/calunia-lula-3.jpg", alt: "Edifício-sede da Procuradoria-Geral da República", credito: "Luis Dantas/Wikimedia Commons (Public domain)", origem: "https://commons.wikimedia.org/wiki/File:PGR_Brasilia_01.jpg", w: 1920, h: 1440 },
      { src: "/img/casos/calunia-lula-4.jpg", alt: "Retrato oficial do presidente Lula", credito: "Ricardo Stuckert/PR/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Foto_oficial_do_Presidente_da_Rep%C3%BAblica_Luiz_In%C3%A1cio_Lula_da_Silva.jpg", w: 1920, h: 2880 },
    ],
    titulo: "Calúnia contra Lula (postagem associando-o ao narcotráfico)",
    periodo: "jan.–jun. 2026",
    situacao: "aberta",
    novidade: "2026-06",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Lula acusado de narcotráfico no X",
      "Para a PF, foi calúnia",
      "A decisão agora é da PGR",
    ],
    chamada: "A PF concluiu que houve crime",
    resumo: "Flávio acusou Lula de narcotráfico nas redes. Para a PF, foi calúnia, com pena que pode ser triplicada por ter sido cometida nas redes sociais. Agora a PGR decide se o denuncia.",
    descricao: [
      "Em 3 de janeiro de 2026, Flávio publicou no X uma postagem que comparava Lula a Nicolás Maduro e o acusava de tráfico internacional de drogas e armas e de lavagem de dinheiro.",
      "Moraes abriu um inquérito em abril de 2026. Em junho, a PF concluiu que houve crime de calúnia. Flávio diz ser vítima de uma tentativa de restringir a liberdade de expressão.",
    ],
    status: "O relatório da PF foi enviado à PGR, que decide se apresenta denúncia. Até agora, não há denúncia.",
    fontes: [
      "https://www.migalhas.com.br/quentes/454026/stf-moraes-abre-inquerito-contra-flavio-bolsonaro-por-post-sobre-lula",
      "https://www.band.com.br/politica/noticias/pf-conclui-que-flavio-bolsonaro-cometeu-calunia-contra-lula-nas-redes-202606261944",
      "https://www.congressoemfoco.com.br/noticia/120288/moraes-manda-flavio-depor-sobre-calunia-ao-ligar-lula-ao-narcotrafico",
    ],
  },
  {
    slug: "multas-tse",
    secao: "eleitoral",
    fotos: [
      { src: "/img/casos/multas-tse-0.webp", alt: "Flávio Bolsonaro, Mara Gabrilli e Carla Zambelli", credito: "Poder360", origem: "https://www.poder360.com.br/justica/tse-multa-congressistas-por-relacionarem-lula-ao-caso-celso-daniel/", w: 1080, h: 1080 },
      { src: "/img/casos/multas-tse-1.jpg", alt: "Lula, alvo da desinformação que ligava seu nome à morte de Celso Daniel", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_(estreita).jpg", w: 1280, h: 1791 },
      { src: "/img/casos/multas-tse-2.jpg", alt: "Sessão do Tribunal Superior Eleitoral", credito: "CNN Brasil", origem: "https://www.cnnbrasil.com.br/politica/tse-multa-em-r-30-mil-nikolas-flavio-eduardo-e-zambelli-por-video-que-associa-lula-a-drogas-e-aborto/", w: 5184, h: 2916 },
      { src: "/img/casos/multas-tse-3.jpg", alt: "A senadora Mara Gabrilli", credito: "Marcelo Camargo/Agência Brasil/Wikimedia Commons (CC BY 3.0 br)", licenca: "https://creativecommons.org/licenses/by/3.0/br/", origem: "https://commons.wikimedia.org/wiki/File:Mara_Gabrilli_(cropped).jpg", w: 1920, h: 2140 },
      { src: "/img/casos/multas-tse-4.jpg", alt: "A deputada Carla Zambelli", credito: "Cleia Viana/Câmara dos Deputados/Wikimedia Commons (CC BY 3.0)", licenca: "https://creativecommons.org/licenses/by/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Carla_Zambelli_(cropped).jpg", w: 1650, h: 2150 },
    ],
    titulo: "Multas do TSE por desinformação na campanha de 2022",
    periodo: "2022–2023",
    situacao: "encerrada",
    novidade: "2023",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Lula ligado ao caso Celso Daniel",
      "Drogas, aborto e mais uma multa",
      "Multas aplicadas",
    ],
    chamada: "Condenado a pagar por fake news",
    resumo: "O TSE multou Flávio por espalhar desinformação contra Lula, inclusive ligando o presidente a um assassinato. São as únicas punições definitivas da lista.",
    descricao: [
      "O TSE multou Flávio em R$ 10 mil por divulgar conteúdo que ligava Lula ao assassinato de Celso Daniel. O placar foi de 4 a 3.",
      "Em outro processo, aplicou multa de R$ 30 mil a Flávio e a outros parlamentares por um vídeo que associava Lula a drogas e aborto. São ilícitos eleitorais, não condenações criminais.",
    ],
    status: "Decididos, com aplicação de multa.",
    fontes: [
      "https://www.poder360.com.br/justica/tse-multa-congressistas-por-relacionarem-lula-ao-caso-celso-daniel/",
      "https://g1.globo.com/politica/noticia/2023/05/11/tse-multa-nikolas-zambelli-eduardo-e-flavio-bolsonaro-por-fake-news-contra-lula-em-2022.ghtml",
    ],
  },
  {
    slug: "propaganda-antecipada",
    secao: "eleitoral",
    fotos: [
      { src: "/img/casos/propaganda-antecipada-0.jpg", alt: "Flávio Bolsonaro no plenário do Senado", credito: "Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_-_55210179449.jpg", w: 1920, h: 1280 },
      { src: "/img/casos/propaganda-antecipada-1.webp", alt: "Silas Malafaia e Flávio Bolsonaro no culto", credito: "Poder360", origem: "https://www.poder360.com.br/poder-gente/flavio-participa-de-culto-de-malafaia-apos-divergencias-publicas/", w: 1600, h: 1080 },
      { src: "/img/casos/propaganda-antecipada-2.jpg", alt: "O pastor Silas Malafaia", credito: "Marcos Corrêa/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Silas_Malafaia_em_abril_de_2019.jpg", w: 1920, h: 1280 },
      { src: "/img/casos/propaganda-antecipada-3.jpg", alt: "Silas Malafaia entrevista Jair Bolsonaro, em 2020", credito: "Palácio do Planalto/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:03_02_2020_Pastor_Silas_Malafaia,_Presidente_do_Conselho_Interdenominacional_de_Ministros_Evang%C3%A9licos_do_Brasil_%E2%80%93_CIMEB_(49493715373).jpg", w: 1920, h: 1371 },
      { src: "/img/casos/propaganda-antecipada-4.jpg", alt: "Flávio Bolsonaro no plenário do Senado, em 2026", credito: "Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_15.04.2026.jpg", w: 1920, h: 2880 },
    ],
    titulo: "Propaganda eleitoral antecipada e pedido de inelegibilidade",
    periodo: "mai.–jul. 2026",
    situacao: "aberta",
    novidade: "2026-07",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Culto ou comício?",
      "Jair Bolsonaro recriado por IA",
      "Ainda sem decisão",
    ],
    chamada: "Culto, comício e um Bolsonaro feito por IA",
    resumo: "Um culto com Malafaia e um vídeo que recriava Jair Bolsonaro com inteligência artificial levaram a pedidos de inelegibilidade de Flávio.",
    descricao: [
      "Um culto na igreja de Silas Malafaia foi apontado como comício antecipado. Uma associação pediu a inelegibilidade de Flávio e de outros pré-candidatos.",
      "Em julho de 2026, o PT também apresentou representações ao TSE e ao STF contra um vídeo feito com inteligência artificial na convenção do PL, que simulava Jair Bolsonaro apoiando Flávio.",
    ],
    status: "Pendentes até a última informação disponível.",
    fontes: [
      "https://veja.abril.com.br/brasil/acao-mira-flavio-bolsonaro-e-silas-por-propaganda-eleitoral-antecipada/",
      "https://valor.globo.com/politica/noticia/2026/05/04/associao-pede-inelegibilidade-de-flvio-bolsonaro-aps-culto-com-malafaia.ghtml",
    ],
  },
  {
    slug: "dark-horse",
    secao: "master",
    fotos: [
      { src: "/img/casos/dark-horse-0.webp", alt: "Flávio Bolsonaro", credito: "Itatiaia", origem: "https://www.itatiaia.com.br/politica/flavio-pediu-r-134-mi-a-vorcaro-para-filme-de-bolsonaro-diz-site/", w: 1620, h: 1080 },
      { src: "/img/casos/dark-horse-1.webp", alt: "Jim Caviezel como Jair Bolsonaro no cartaz do filme Dark Horse", credito: "Divulgação/Dark Horse", origem: "https://portaln10.com.br/entrete/filmes/dark-horse-filme-sobre-jair-bolsonaro-ganha-cartaz-e-confirma-lancamento-para-setembro-327163/", w: 1611, h: 873 },
      { src: "/img/casos/dark-horse-2.webp", alt: "O banqueiro Daniel Vorcaro, dono do Banco Master", credito: "Poder360", origem: "https://www.poder360.com.br/poder-seguranca-publica/daniel-vorcaro-e-transferido-da-pf-para-presidio-em-guarulhos/", w: 1920, h: 1080 },
      { src: "/img/casos/dark-horse-3.jpg", alt: "Flávio Bolsonaro concede entrevista, em 2026", credito: "Senado Federal/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Entrevista_senador_Fl%C3%A1vio_Bolsonaro_-_55241001108.jpg", w: 3840, h: 2565 },
      { src: "/img/casos/dark-horse-4.jpg", alt: "André Mendonça, relator do inquérito no STF", credito: "Luis Macedo/Câmara dos Deputados/Wikimedia Commons (CC BY 3.0)", licenca: "https://creativecommons.org/licenses/by/3.0/", origem: "https://commons.wikimedia.org/wiki/File:Andr%C3%A9_Luiz_de_Almeida_Mendon%C3%A7a_(cropped).jpg", w: 900, h: 1220 },
      { src: "/img/casos/dark-horse-5.jpg", alt: "Flávio Bolsonaro discursa na tribuna do Senado", credito: "Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_-_55502941346.jpg", w: 3840, h: 2560 },
    ],
    titulo: "Dinheiro de Daniel Vorcaro (Banco Master) para o filme \"Dark Horse\"",
    periodo: "2024–2026",
    situacao: "aberta",
    novidade: "2026-10",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "R$ 134 milhões para um filme",
      "Um fundo nos EUA e um banqueiro preso",
      "Flávio admite o pedido",
      "A PF pede mais 90 dias",
    ],
    chamada: "R$ 134 milhões pedidos a um banqueiro hoje preso",
    resumo: "Áudios e mensagens mostram Flávio negociando com Daniel Vorcaro, do Banco Master, dinheiro para um filme sobre o pai. Um dia depois de Flávio responder \"Amém!\" a uma mensagem dele, Vorcaro foi preso. O STF investiga.",
    descricao: [
      "Em maio de 2026, o Intercept Brasil revelou mensagens e áudios em que Flávio negociava R$ 134 milhões com Daniel Vorcaro, dono do Banco Master, para financiar o filme \"Dark Horse\", sobre Jair Bolsonaro. Documentos mostram ao menos US$ 10,6 milhões (cerca de R$ 61 milhões) transferidos entre fevereiro e maio de 2025.",
      "Segundo a PF, parte do dinheiro pode ter ido para um fundo nos EUA ligado a um advogado de Eduardo Bolsonaro. Vorcaro foi preso em novembro de 2025, acusado de uma fraude bilionária. Nos dias anteriores, Flávio tentou falar com ele várias vezes.",
      "Flávio admitiu ter pedido o dinheiro, mas diz que o patrocínio era privado e que não ofereceu favores. Os crimes apurados são lavagem de dinheiro, evasão de divisas e corrupção.",
    ],
    status: "O inquérito foi autorizado em julho de 2026 e Flávio passou a ser investigado em setembro. Uma reportagem de outubro diz que a PF ainda não encontrou atuação de Flávio em benefício do Master e pediu mais 90 dias de prazo.",
    fontes: [
      "https://www.itatiaia.com.br/politica/flavio-pediu-r-134-mi-a-vorcaro-para-filme-de-bolsonaro-diz-site/",
      "https://apublica.org/nota/flavio-bolsonaro-audio-vazado-com-vorcaro-cobra-r-134-milhoes/",
      "https://www.bbc.com/portuguese/articles/clyp4zgr3llo",
      "https://g1.globo.com/politica/noticia/2026/09/11/flavio-bolsonaro-e-investigado-em-inquerito-da-pf-aberto-para-apurar-financiamento-do-filme-dark-horse.ghtml",
      "https://claudiodantas.com.br/inquerito-dark-horse-nao-aponta-flavio-master/",
    ],
  },
  {
    slug: "willer-tomaz",
    secao: "master",
    fotos: [
      { src: "/img/casos/willer-tomaz-0.jpg", alt: "Flávio Bolsonaro concede entrevista, em 2026", credito: "Senado Federal/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Entrevista_senador_Fl%C3%A1vio_Bolsonaro_-_55239954032.jpg", w: 1920, h: 2875 },
      { src: "/img/casos/willer-tomaz-1.jpg", alt: "O advogado Willer Tomaz depõe na CPMI da JBS, em 2017", credito: "Senado Federal/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:CPMI-JBS_-_Comiss%C3%A3o_Parlamentar_Mista_de_Inqu%C3%A9rito_da_JBS_(37447615496).jpg", w: 1920, h: 1278 },
      { src: "/img/casos/willer-tomaz-2.jpg", alt: "Salão Nobre do Superior Tribunal de Justiça", credito: "Superior Tribunal de Justiça STJ/Wikimedia Commons (CC BY 2.0)", licenca: "https://creativecommons.org/licenses/by/2.0/", origem: "https://commons.wikimedia.org/wiki/File:Edif%C3%ADcio-sede_e_Instala%C3%A7%C3%B5es_do_STJ_(50087178976).jpg", w: 1920, h: 1281 },
      { src: "/img/casos/willer-tomaz-3.jpg", alt: "Aeroporto Internacional de Puerto Iguazú, na Argentina, de onde partiu o voo de Flávio", credito: "Vmzp85/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:IGR01.jpg", w: 3840, h: 2880 },
      { src: "/img/casos/willer-tomaz-4.jpg", alt: "Palácio do Supremo Tribunal Federal, em Brasília", credito: "Rodrigo Rocatto/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_do_Supremo_Tribunal_Federal_-_Bras%C3%ADlia_-_20210206174604.jpg", w: 3840, h: 2160 },
      { src: "/img/casos/willer-tomaz-5.jpg", alt: "Flávio Bolsonaro no plenário do Senado", credito: "Carlos Moura/Agência Senado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Plen%C3%A1rio_do_Senado_-_55503046138.jpg", w: 1920, h: 1280 },
    ],
    titulo: "Lavagem de dinheiro com o advogado Willer Tomaz (apostas)",
    periodo: "2025–2026",
    situacao: "aberta",
    novidade: "2026-10-27",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "R$ 5 bilhões em apostas",
      "Flávio, o “usuário master”",
      "Proibido de sair, foi para Miami",
      "Nas mãos de Moraes, no STF",
    ],
    chamada: "R$ 5 bilhões em apostas e um \"usuário master\"",
    resumo: "Um amigo advogado de Flávio é suspeito de lavar dinheiro com apostas. A PF diz que o nome de Flávio aparece numa conta ligada a ele. Resultado: passaporte cancelado e fuga do país.",
    descricao: [
      "A PF investiga se o advogado Willer Tomaz, amigo de Flávio, usou casas de apostas para lavar dinheiro. Ele teria movimentado cerca de R$ 5 bilhões em apostas em 2025.",
      "Segundo a PF, Flávio aparecia como \"usuário master\" na conta de uma empresa ligada a Tomaz, e uma empresa do advogado pagou viagens da família de Flávio à Europa. Em operação relacionada, a PF fez buscas contra um ex-secretário de TI do STJ suspeito de passar a Tomaz informações sigilosas sobre processos. Flávio diz que a relação é apenas de amizade.",
      "Neste inquérito, Moraes proibiu Flávio de sair do país e mandou que ele entregasse os passaportes. O prazo venceu sem a entrega, e na noite de 27/10/2026 Flávio deixou o Brasil pela Argentina e voou para Miami.",
    ],
    status: "Em andamento no STF, com relatoria de Alexandre de Moraes.",
    fontes: [
      "https://www.congressoemfoco.com.br/noticia/123352/flavio-e-alvo-de-inquerito-na-pf-por-suspeita-de-lavagem-de-dinheiro",
      "https://www.correiodamanha.com.br/politica/2026/10/328299-stf-abre-inquerito-contra-flavio-e-willer-tomaz-por-suspeita-de-lavagem-de-dinheiro.html",
      "https://www.diariodepernambuco.com.br/politica/2026/10/11727001-pf-mira-ex-secretario-de-ti-do-stj-para-apurar-vazamentos-a-advogado-amigo-de-flavio.html",
      "https://www.aosfatos.org/noticias/o-que-se-sabe-suposta-fuga-flavio-bolsonaro/",
    ],
  },
  {
    slug: "trama-segundo-turno",
    secao: "master",
    fotos: [
      { src: "/img/casos/trama-segundo-turno-0.jpg", alt: "Urna eletrônica brasileira", credito: "TSE - Tribunal Superior Eleitoral/Wikimedia Commons (Public domain)", origem: "https://commons.wikimedia.org/wiki/File:Urna_eletr%C3%B4nica_brasileira_UE2020.jpg", w: 3543, h: 2362 },
      { src: "/img/casos/trama-segundo-turno-1.jpg", alt: "Parlamentares anunciam o pedido de CPMI do Banco Master", credito: "Senado Federal/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Abertura_da_CPMI_do_Banco_Master_-_55076990135.jpg", w: 1920, h: 1280 },
      { src: "/img/casos/trama-segundo-turno-2.png", alt: "Protestos pela delação de Vorcaro, em janeiro de 2026", credito: "Ópólitískur heimspekingur/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Protestos_contra_o_Banco_Master_2.png", w: 960, h: 960 },
      { src: "/img/casos/trama-segundo-turno-3.jpg", alt: "Supremo Tribunal Federal, onde corre o inquérito do Banco Master", credito: "Falcão Alado/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Supremo_Tribunal_Federal_por_Henrique_Goldenstein_(01).jpg", w: 3840, h: 2560 },
      { src: "/img/casos/trama-segundo-turno-4.jpg", alt: "Coletiva sobre a CPMI do Banco Master", credito: "Senado Federal/Wikimedia Commons (CC BY-SA 4.0)", licenca: "https://creativecommons.org/licenses/by-sa/4.0/", origem: "https://commons.wikimedia.org/wiki/File:Abertura_da_CPMI_do_Banco_Master_-_55076882744.jpg", w: 3840, h: 2560 },
    ],
    titulo: "Suposta articulação com Vorcaro para interferir no 2º turno",
    periodo: "out. 2026",
    situacao: "sem-investigacao",
    novidade: "2026-10",
    // Titulo de cada cartao do story depois da capa (descricao e status).
    titulosStory: [
      "Aliados de Lula acionam a PF",
      "Um HD para virar a eleição",
      "Por enquanto, só uma suspeita",
    ],
    chamada: "Um HD misterioso no segundo turno",
    resumo: "Aliados de Lula pedem à PF que investigue se a equipe de Vorcaro e aliados de Flávio tentaram virar a eleição com uma gravação. Por enquanto, é apenas uma suspeita.",
    descricao: [
      "Advogados ligados à campanha de Lula pediram à PF que investigue uma suposta articulação entre Vorcaro e aliados da campanha de Flávio.",
      "Segundo a representação, um HD com um suposto depoimento de Vorcaro contra adversários teria sido usado para influenciar o segundo turno e atrapalhar as investigações. A representação não atribui participação direta a Flávio.",
    ],
    status: "É apenas um pedido de investigação, apresentado por adversários políticos.",
    fontes: [
      "https://www.brasildefato.com.br/2026/10/09/pf-e-acionada-por-suspeita-de-trama-entre-vorcaro-e-aliados-de-flavio-bolsonaro-na-eleicao/",
    ],
  },
];

// Mais recente no topo: pela data da ultima novidade de cada caso
// (novidade, AAAA, AAAA-MM ou AAAA-MM-DD).
CASOS.sort((x, y) => y.novidade.localeCompare(x.novidade));
