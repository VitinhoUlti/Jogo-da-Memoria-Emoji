let Game = {
  elementos: {
    localcards: document.getElementById("cards")
  },
  valores: {
    emojis: [
      "😀","😁","😎","🥰","😴","🤑","😭","😨","😀","😁","😎","🥰","😴","🤑","😭","😨"
    ],
    cardsabertos: [],
    cardsabertoshtml: [],
    emojisEmbaralhados: "",
  },
};

Game.valores.emojisEmbaralhados = Game.valores.emojis.sort(() =>
  Math.random() > 0.5 ? 2 : -1
);

function criarCards() {
  for (let i = 0; i < 16; i++) {
    let element = document.createElement("div");

    Game.elementos.localcards.appendChild(element);

    element.className = `card`;

    element.addEventListener("click", () => {
      element.innerHTML = `${Game.valores.emojisEmbaralhados[i]}`;
      element.id = `${Game.valores.emojisEmbaralhados[i]}`;

      Game.valores.cardsabertos.push(element.id);
      Game.valores.cardsabertoshtml.push(element);

      if (Game.valores.cardsabertos.length == 2) {
        if (Game.valores.cardsabertos[0] == Game.valores.cardsabertos[1]) {
          Game.valores.cardsabertos = [];
          Game.valores.cardsabertoshtml = [];

        } else {
          Game.valores.cardsabertoshtml[0].innerHTML = ``;
          Game.valores.cardsabertoshtml[1].innerHTML = ``;

          Game.valores.cardsabertos = [];
          Game.valores.cardsabertoshtml = [];
        }
      }
    });
  }
}
criarCards();
function reset() {
    window.location.reload()
}