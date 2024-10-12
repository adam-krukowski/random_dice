// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

document.addEventListener("DOMContentLoaded", function() {
  const diceDots = document.querySelectorAll('.dot');

  document.getElementById("roll-button").addEventListener("click", function() {
    rollDice();
  });

  // Function to roll the dice and show the appropriate dots
  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    showNumber(randomNumber);
  }

  // Function to display dots based on the rolled number
  function showNumber(number) {
    // Remove the "show" class from all dots to hide them
    diceDots.forEach(dot => dot.classList.remove('show'));

    // Based on the number rolled, show the corresponding dots
    if (number === 1) {
      diceDots[4].classList.add('show'); // Center dot
    } else if (number === 2) {
      diceDots[0].classList.add('show'); // Top-left
      diceDots[8].classList.add('show'); // Bottom-right
    } else if (number === 3) {
      diceDots[0].classList.add('show'); // Top-left
      diceDots[4].classList.add('show'); // Center
      diceDots[8].classList.add('show'); // Bottom-right
    } else if (number === 4) {
      diceDots[0].classList.add('show'); // Top-left
      diceDots[2].classList.add('show'); // Top-right
      diceDots[6].classList.add('show'); // Bottom-left
      diceDots[8].classList.add('show'); // Bottom-right
    } else if (number === 5) {
      diceDots[0].classList.add('show'); // Top-left
      diceDots[2].classList.add('show'); // Top-right
      diceDots[4].classList.add('show'); // Center
      diceDots[6].classList.add('show'); // Bottom-left
      diceDots[8].classList.add('show'); // Bottom-right
    } else if (number === 6) {
      diceDots[0].classList.add('show'); // Top-left
      diceDots[2].classList.add('show'); // Top-right
      diceDots[3].classList.add('show'); // Middle-left
      diceDots[5].classList.add('show'); // Middle-right
      diceDots[6].classList.add('show'); // Bottom-left
      diceDots[8].classList.add('show'); // Bottom-right
    }
  }
});
