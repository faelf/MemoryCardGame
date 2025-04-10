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