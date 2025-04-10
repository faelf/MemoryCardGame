/*
* Memory Card Game with Zelda Cards
*/

// Getting HTML info
const gameBoard = document.getElementById('gameBoard');
const turnsCount = document.getElementById('turns');
const pointsCount = document.getElementById('points');

// console.log(gameBoard);
// console.log(turnsCount);
// console.log(pointsCount);

// Game Stats
let gameStats = {
  turns: 0,
  points: 0,
};

// console.log(gameStats);

// Storing the cards
const cardFiles = [
  { id: 1,  imgSrc: "assets/images/zelda1.webp", name: "card1" },
  { id: 2,  imgSrc: "assets/images/zelda2.webp", name: "card2" },
  { id: 3,  imgSrc: "assets/images/zelda3.webp", name: "card3" },
  { id: 4,  imgSrc: "assets/images/zelda4.webp", name: "card4" },
  { id: 5,  imgSrc: "assets/images/zelda5.webp", name: "card5" },
  { id: 6,  imgSrc: "assets/images/zelda6.webp", name: "card6" },
  { id: 7,  imgSrc: "assets/images/zelda1.webp", name: "card1" },
  { id: 8,  imgSrc: "assets/images/zelda2.webp", name: "card2" },
  { id: 9,  imgSrc: "assets/images/zelda3.webp", name: "card3" },
  { id: 10, imgSrc: "assets/images/zelda4.webp", name: "card4" },
  { id: 11, imgSrc: "assets/images/zelda5.webp", name: "card5" },
  { id: 12, imgSrc: "assets/images/zelda6.webp", name: "card6" },
];

// console.log(cardFiles);

/*
* Shuffle the cards
*/
function shuffleCards () {
  const shuffledCards = cardFiles.sort(() => Math.random() - 0.5);
  return shuffledCards;
};

// let cards = shuffleCards();
// console.log(cards);

function generateCards () {
  // Store the shuffled cards into a const
  const cards = shuffleCards();
  // console.log(cards);
  // Loop through the cards to generate each card HTML
  for (let i = 0; i < cards.length; i++) {
    // console.log(cards[i]);
    // Generate the HTML tag for individual card
    const card = document.createElement("div");
    const face = document.createElement("img");
    // Attach the img src to the card
    face.src = cards[i].imgSrc;
    // Attach the cards to Game Board
    gameBoard.appendChild(card);
    card.appendChild(face);
  }
}

/*
* Starts a new game resetting game stats and generating new cards
*/
function newGame () {
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
};

/*
* Run the newGame function when the page is loaded
*/
document.addEventListener("DOMContentLoaded", newGame);