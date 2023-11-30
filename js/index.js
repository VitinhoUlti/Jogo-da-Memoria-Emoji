let Game = {
    elementos: {
        localcards: document.getElementById("cards")
    },
    valores: {
        emojis: [
            "😀",
            "😁",
            "😎",
            "🥰",
            "😴",
            "🤑",
            "😭",
            "😨"
        ],
        cardsabertos: []
    }
}
function criarCards() {
    for (let i = 0; i < 16; i++) {
        let element = document.createElement("div");
        Game.elementos.localcards.appendChild(element)
        element.className = `card`
    }
}
criarCards()