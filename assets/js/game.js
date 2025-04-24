/*
* Memory Card Game with Zelda Cards
*/

// Getting HTML info
const gameBoard = document.getElementById("gameBoard");
const turnsCount = document.getElementById("turns");
const pointsCount = document.getElementById("points");
const openInstructionsBtn = document.getElementById("openInstructionsBtn");
const closeInstructionsBtn = document.getElementById("closeInstructionsBtn");
const howtoplay = document.getElementById("howtoplay");

// Game Stats
let gameStats = {
  points: 0,
  turns: 0
};

// Storing the cards
const cardFiles = [
  {alt: "Zelda", id: 1, imgSrc: "assets/images/zelda1.webp", name: "card1"},
  {alt: "Zelda", id: 2, imgSrc: "assets/images/zelda2.webp", name: "card2"},
  {alt: "Zelda", id: 3, imgSrc: "assets/images/zelda3.webp", name: "card3"},
  {alt: "Zelda", id: 4, imgSrc: "assets/images/zelda4.webp", name: "card4"},
  {alt: "Zelda", id: 5, imgSrc: "assets/images/zelda5.webp", name: "card5"},
  {alt: "Zelda", id: 6, imgSrc: "assets/images/zelda6.webp", name: "card6"},
  {alt: "Zelda", id: 7, imgSrc: "assets/images/zelda1.webp", name: "card1"},
  {alt: "Zelda", id: 8, imgSrc: "assets/images/zelda2.webp", name: "card2"},
  {alt: "Zelda", id: 9, imgSrc: "assets/images/zelda3.webp", name: "card3"},
  {alt: "Zelda", id: 10, imgSrc: "assets/images/zelda4.webp", name: "card4"},
  {alt: "Zelda", id: 11, imgSrc: "assets/images/zelda5.webp", name: "card5"},
  {alt: "Zelda", id: 12, imgSrc: "assets/images/zelda6.webp", name: "card6"}
];

/*
* Shuffle the cards
*/
function shuffleCards() {
  const shuffledCards = cardFiles.sort(() => Math.random() - 0.5);
  return shuffledCards;
}

/*
* Generates the HTML for the cards
*/
function generateCards() {
  // Store the shuffled cards into a const
  const cards = shuffleCards();
  // Loop through the cards to generate each card HTML
  let i = 0;
  const cardsLength = cards.length;
  while (i < cardsLength) {
    // Generate the HTML tag for individual card
    const card = document.createElement("div");
    const cardFrontImg = document.createElement("img");
    const cardBack = document.createElement("div");
    // Attach the img src to the card
    cardFrontImg.src = cards[i].imgSrc;
    // Add the name of the card
    card.setAttribute("data-name", cards[i].name);
    cardFrontImg.setAttribute("alt", cards[i].alt);
    // Attach the cards to Game Board
    gameBoard.appendChild(card);
    card.appendChild(cardFrontImg);
    card.appendChild(cardBack);
    // Adding Classes
    card.classList.add("card");
    cardFrontImg.classList.add("front");
    cardBack.classList.add("back");
    // Add Click Event on the card
    card.addEventListener("click", function (e) {
      card.classList.toggle("flip");
      clickedCards(e);
    });
    i += 1;
  }
}

/*
* Reset the HTML
*/
function resetGame() {
  // Clear the HTML
  gameBoard.innerHTML = "";
  // Clear turns
  gameStats.turns = 0;
  turnsCount.textContent = gameStats.turns;
  // Clear Points
  gameStats.points = 0;
  pointsCount.textContent = gameStats.points;
  // Generate new cards
  generateCards();
}

/*
* Starts a new game
*/
function newGame() {
  const matchedCards = document.getElementsByClassName("matched");
  const matchedCardsLength = matchedCards.length;
  if (matchedCardsLength > 0) {
    let i = 0;
    while (i < matchedCardsLength) {
      matchedCards[i].classList.remove("flip");
      i += 1;
    }
    setTimeout(resetGame, 350);
  } else {
    resetGame();
  }
}

/*
* Mark the clicked cards as flipped
*/
function clickedCards(e) {
  // Storing the clicked card
  const clickedCard = e.target;
  // Adding flipped class to the clicked cards
  clickedCard.classList.add("flipped");
  checkCards();
}

/*
* Check if the flipped cards match
*/
function matchedCard(matched) {
  matched.classList.remove("flipped");
  matched.classList.add("matched");
}

function notMatchedCard(unmatched) {
  unmatched.classList.remove("flipped");
  setTimeout(() => unmatched.classList.remove("flip"), 700);
}

function checkCards() {
  // Storing the flipped cards
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    const flippedCard1 = flippedCards[0].getAttribute("data-name");
    const flippedCard2 = flippedCards[1].getAttribute("data-name");
    // If the cards match
    if (flippedCard1 === flippedCard2) {
      flippedCards.forEach(matchedCard);
      addPoints();
      addTurns();
      win();
    // If the cards do not match
    } else {
      flippedCards.forEach(notMatchedCard);
      addTurns();
    }
  }
}

/*
* Add points to game stats and updates display
*/
function addPoints() {
  gameStats.points += 1;
  pointsCount.textContent = gameStats.points;
}

/*
* Add turns to game stats and updates display
*/
function addTurns() {
  gameStats.turns += 1;
  turnsCount.textContent = gameStats.turns;
}

/*
* Display Congratulation message when the player completes the game
*/
function win() {
  const matchedCards = document.querySelectorAll(".matched");
  if (matchedCards.length === 12) {
    setTimeout(function () {
      gameBoard.innerHTML =
      `<div class="winMessage">
      <div class="winMessageText">
      🎉 Congratulations! 🎊
      </div></div>`;
    }, 700);
  }
}

/*
* Open instructions modal
*/
function openInstructions() {
  howtoplay.showModal();
}

function closeInstructions() {
  howtoplay.close();
}

openInstructionsBtn.addEventListener("click", openInstructions);

closeInstructionsBtn.addEventListener("click", closeInstructions);

/*
* Run the newGame function when the page is loaded
*/
document.addEventListener("DOMContentLoaded", newGame);