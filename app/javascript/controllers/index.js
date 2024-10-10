// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("roll-button").addEventListener("click", function() {
    rollDice();
  });

  // Function to roll the dice and display dots
  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    showNumber(randomNumber);
  }

  // Function to display the dots based on the number rolled
  function showNumber(number) {
    // Hide all dots initially
    for (let i = 1; i <= 9; i++) {
      document.getElementById(`dot-${i}`).style.display = "none";
    }

    // Show the appropriate dots for the rolled number
    if (number === 1) {
      document.getElementById('dot-5').style.display = 'block';
    } else if (number === 2) {
      document.getElementById('dot-1').style.display = 'block';
      document.getElementById('dot-9').style.display = 'block';
    } else if (number === 3) {
      document.getElementById('dot-9').style.display = 'block';
    } else if (number === 4) {
      document.getElementById('dot-9').style.display = 'block';
    } else if (number === 5) {
      document.getElementById('dot-1').style.display = 'block';
      document.getElementById('dot-9').style.display = 'block';
    } else if (number === 6) {
      document.getElementById('dot-1').style.display = 'block';
    }
  }
});
