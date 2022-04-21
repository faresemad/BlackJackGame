let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Fares",
    chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// This function return a random number between 1 - 13
function getRandomCard() {
    // Generate Random number with Math.random() 0 - 0.99999
    // if 1     --> return 11
    // if 11-13 --> return 10
    // return Math.floor(Math.random() * 13) + 1;
    let ranNum = Math.floor(Math.random() * 13) + 1;
    if (ranNum === 1) {
        return 11
    } else if (ranNum > 10) {
        return 10
    } else {
        return ranNum
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondeCard = getRandomCard()
    cards = [firstCard , secondeCard]
    sum = firstCard + secondeCard
    renderGame()
}
function renderGame() {
    // cardsEl.textContent = "Cards: " + cards[0] + " , " + cards[1]
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You've out of the game!"
        isAlive = false
    }
    // Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
function newCard() {
    // let card = 6
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
