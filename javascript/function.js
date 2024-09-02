// Dados JSON incorporados diretamente no código
const data = {
  words: [
    {
      word: "Denegrir",
      suggestions: ["Difamar", "Ofender"],
    },
    {
      word: "Denegrindo",
      suggestions: ["Difamando", "Ofendendo"],
    },
    {
      word: "Criado mudo",
      suggestions: ["Mesa de cabeceira"],
    },
    {
      word: "Cabelo ruim",
      suggestions: ["Cabelo crespo", "Cabelo cacheado", "Cabelo afro"],
    },
    {
      word: "Lista negra",
      suggestions: ["Lista proibida", "Lista restrita"],
    },
    {
      word: "Ovelha negra",
      suggestions: ["Pessoa diferente", "Pessoa única"],
    },
    {
      word: "Escravos",
      suggestions: ["Pessoas escravizadas"],
    },
    {
      word: "Cor do pecado",
      suggestions: ["Cor de pele"],
    },
    {
      word: "Mulata",
      suggestions: ["Negra", "Pessoa de pele escura"],
    },
    {
      word: "Não sou tuas negas",
      suggestions: ["Não sou seu subordinado", "Não sou seu funcionário"],
    },
    {
      word: "Mercado negro",
      suggestions: ["Mercado clandestino"],
    },
    {
      word: "Inveja branca",
      suggestions: ["Inveja"],
    },
    {
      word: "João sem braço",
      suggestions: ["Pessoa com deficiência"],
    },
    {
      word: "Dados esquizofrênicos",
      suggestions: ["Dados desordenados"],
    },
    {
      word: "Dados bipolares",
      suggestions: ["Dados inconsistentes"],
    },
    {
      word: "Portador de deficiência",
      suggestions: ["Pessoa com deficiência"],
    },
    {
      word: "Louco",
      suggestions: ["Pessoa com problemas mentais", "Pessoa com transtorno"],
    },
    {
      word: "Maluco",
      suggestions: ["Pessoa excêntrica", "Pessoa diferente"],
    },
    {
      word: "Retardado",
      suggestions: ["Pessoa com deficiência intelectual"],
    },
    {
      word: "Mongol",
      suggestions: ["Pessoa com deficiência"],
    },
    {
      word: "Surdo-mudo",
      suggestions: ["Pessoa surda", "Pessoa com deficiência de fala"],
    },
    {
      word: "Bipolar",
      suggestions: ["Pessoa com transtorno bipolar"],
    },
    {
      word: "Sequelado",
      suggestions: ["Pessoa com sequelas", "Pessoa com deficiência"],
    },
    {
      word: "Cego de raiva",
      suggestions: ["Muito bravo", "Extremamente irritado"],
    },
    {
      word: "Dar uma de João sem braço",
      suggestions: ["Fazer-se de desentendido"],
    },
    {
      word: "Não temos braço para isso",
      suggestions: ["Não temos capacidade para isso"],
    },
    {
      word: "Desculpa de aleijado é muleta",
      suggestions: ["Desculpa não é uma desculpa válida"],
    },
    {
      word: "A coisa tá preta",
      suggestions: ["A situação está difícil"],
    },
    {
      word: "A dar com pau",
      suggestions: ["Muito", "Em grande quantidade"],
    },
    {
      word: "Cor de pele",
      suggestions: ["Tom de pele"],
    },
    {
      word: "Coisa de preto",
      suggestions: ["Coisa ruim", "Coisa negativa"],
    },
    {
      word: "Serviço de preto",
      suggestions: ["Serviço malfeito", "Trabalho de baixa qualidade"],
    },
    {
      word: "Trabalho de preto",
      suggestions: ["Trabalho malfeito", "Trabalho de baixa qualidade"],
    },
    {
      word: "Doméstica",
      suggestions: ["Empregada", "Funcionária"],
    },
    {
      word: "Fazer nas coxas",
      suggestions: ["Fazer algo malfeito"],
    },
    {
      word: "Humor negro",
      suggestions: ["Humor ácido", "Humor sombrio"],
    },
    {
      word: "Indiada",
      suggestions: ["Confusão", "Trapalhada"],
    },
    {
      word: "Judiar",
      suggestions: ["Maltratar", "Sofrimento"],
    },
    {
      word: "Judiaria",
      suggestions: ["Maltrato", "Sofrimento"],
    },
    {
      word: "Moreno",
      suggestions: ["Pele mais escura", "Pessoa com tom de pele mais escuro"],
    },
    {
      word: "Nega maluca",
      suggestions: ["Pessoa excêntrica", "Pessoa com comportamento estranho"],
    },
    {
      word: "Nhaca",
      suggestions: ["Cheiro ruim", "Odor desagradável"],
    },
    {
      word: "Tem o pé na cozinha",
      suggestions: ["Está muito presente", "Está sempre por perto"],
    },
    {
      word: "Samba do criolo doido",
      suggestions: ["Confusão", "Bagunça"],
    },
  ],
};

// Função para verificar palavras ofensivas e fornecer sugestões
function match() {
  const words = data.words;
  let input = document.getElementById("input-text").value.toUpperCase();
  let outputText = "";

  words.forEach((item) => {
    const wordUpper = item.word.toUpperCase();
    if (input.includes(wordUpper)) {
      item.suggestions.forEach((suggestion) => {
        outputText += `<p>${suggestion.trim()}</p>`;
      });
    }
  });

  document.getElementById("listSugestion").innerHTML = outputText;
}


// Função para mostrar o texto digitado
function getText() {
  let text = document.getElementById("input-text").value;
  if (text) {
    // document.getElementById(
    //   "listSugestion"
    // ).innerHTML = `<p>Não use: "<b id="input">${text}</b>", <b id="definition"></b>`;
    match();
  } else {
    document.getElementById("word_wrong").innerHTML = "";
    document.getElementById("sugestion").innerHTML = "";
  }
}
