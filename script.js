// Get all the card elements on the game board
const cards = document.querySelectorAll('.card');

let flippedCards = []; // Keep track of flipped cards

let score = 0; // Initialize the score to zero

// Add a click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', flipCard);
});

// Flip the card over when it's clicked
function flipCard() {
  // Add the "flipped" class to the card
  this.classList.add('flipped');
  
  // Add the flipped card to the array
  flippedCards.push(this);
  
  // Check if two cards are flipped over
  if (flippedCards.length === 2) {
    // Disable clicking on other cards until the animation finishes
    cards.forEach(card => card.style.pointerEvents = 'none');
    
    // Check if the two flipped cards match
    if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
      // Keep the cards flipped over and reset the flippedCards array
      flippedCards = [];

      // Increment the score and update the score element
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
      
      // Enable clicking on other cards again
      cards.forEach(card => card.style.pointerEvents = 'auto');
    } else {
      // Flip the cards back over after a delay and reset the flippedCards array
      setTimeout(() => {
        flippedCards.forEach(card => card.classList.remove('flipped'));
        flippedCards = [];
        
        // Enable clicking on other cards again
        cards.forEach(card => card.style.pointerEvents = 'auto');
      }, 1000);
    }
  }
}
