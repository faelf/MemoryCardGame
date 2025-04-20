/*
* Memory Card Game with Zelda Cards
*/

// Getting HTML info
const gameBoard = document.getElementById('gameBoard');
const turnsCount = document.getElementById('turns');
const pointsCount = document.getElementById('points');

// Game Stats
let gameStats = {
  turns: 0,
  points: 0,
};

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

/*
* Shuffle the cards
*/
function shuffleCards () {
  const shuffledCards = cardFiles.sort(() => Math.random() - 0.5);
  return shuffledCards;
};

/*
* Generates the HTML for the cards
*/
function generateCards () {
  // Store the shuffled cards into a const
  const cards = shuffleCards();
  // Loop through the cards to generate each card HTML
  for (let i = 0; i < cards.length; i++) {
    // Generate the HTML tag for individual card
    const card = document.createElement("div");
    const cardFrontImg = document.createElement("img");
    const cardBack = document.createElement("div");
    // Attach the img src to the card
    cardFrontImg.src = cards[i].imgSrc;
    // Add the name of the card
    card.setAttribute('data-name', cards[i].name);
    // Attach the cards to Game Board
    gameBoard.appendChild(card);
    card.appendChild(cardFrontImg);
    card.appendChild(cardBack);
    // Adding Classes
    card.classList.add('card');
    cardFrontImg.classList.add('front');
    cardBack.classList.add('back');
    // Add Click Event on the card
    card.addEventListener('click', (e) => {
      card.classList.toggle('flip');
      clickedCards(e);
    });
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
function newGame () {
  const matchedCards = document.getElementsByClassName('matched');
  if (matchedCards.length > 0) {
    for (let i = 0; i < matchedCards.length; i++) {
      matchedCards[i].classList.remove('flip');
    }
    setTimeout(resetGame, 2000);
  } else {
    resetGame();
  };
};

/*
* Mark the clicked cards as flipped
*/
function clickedCards (e) {
  // Storing the clicked card
  const clickedCard = e.target;
  // Adding flipped class to the clicked cards
  clickedCard.classList.add("flipped")
  checkCards();
};

/*
* Check if the flipped cards match
*/
function checkCards () {
  // Storing the flipped cards
  const flippedCards = document.querySelectorAll('.flipped');

  if (flippedCards.length === 2) {
    const flippedCard1 = flippedCards[0].getAttribute('data-name');
    const flippedCard2 = flippedCards[1].getAttribute('data-name');
    // If the cards match
    if (flippedCard1 === flippedCard2) {
      flippedCards.forEach(matchedCard);

      function matchedCard (matched) {
        matched.classList.remove('flipped');
        matched.classList.add('matched');
      };
      addPoints();
      addTurns();
      win();
    // If the cards do not match
    } else {
      flippedCards.forEach(notMatchedCard);

      function notMatchedCard (unmatched) {
        unmatched.classList.remove('flipped');
        setTimeout(() => unmatched.classList.remove('flip'), 700);
      };
      addTurns();
    }
  }
};

/*
* Add points to game stats and updates display
*/
function addPoints () {
  gameStats.points++;
  pointsCount.textContent = gameStats.points;
};

/*
* Add turns to game stats and updates display
*/
function addTurns () {
  gameStats.turns++;
  turnsCount.textContent = gameStats.turns;
};

/*
* Display Congratulation message when the player completes the game
*/
function win () {
  const matchedCards = document.querySelectorAll('.matched');
  if (matchedCards.length === 12) {
    setTimeout(() => gameBoard.innerHTML = `<div class="winMessage"><div class="winMessageText">🎉 Contratulations! 🎊</div></div>`, 700);
  }
}

/*
* Run the newGame function when the page is loaded
*/
document.addEventListener("DOMContentLoaded", newGame);