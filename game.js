document.addEventListener("DOMContentLoaded", function() {
    // Select the HTML elements
    let firstNumberElement = document.getElementById("firstNumber");
    let secondNumberElement = document.getElementById("secondNumber");
    let userInputElement = document.getElementById("userInput");
    let gameResultElement = document.getElementById("gameResult");
    let checkButton = document.getElementById("checkButton");
    let restartButton = document.getElementById("restartButton");
  
    // Define messages
    let successMessage = "Congratulations! You got it right.";
    let tryAgainMessage = "Please Try Again!";
  
    // Function to restart the game
    function restartGame() {
      let firstRandomNumber = Math.random() * 100;
      let secondRandomNumber = Math.random() * 100;
  
      firstNumberElement.textContent = Math.ceil(firstRandomNumber);
      secondNumberElement.textContent = Math.ceil(secondRandomNumber);
  
      gameResultElement.textContent = "";
      userInputElement.value = "";
    }
  
    // Function to check the result
    function checkResult() {
      let firstRandomInteger = parseInt(firstNumberElement.textContent);
      let secondRandomInteger = parseInt(secondNumberElement.textContent);
      let userEnteredSum = parseInt(userInputElement.value);
  
      let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;
  
      if (userEnteredSum === sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f";
      } else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c";
      }
    }
  
    // Attach event listeners to buttons
    checkButton.addEventListener("click", checkResult);
    restartButton.addEventListener("click", restartGame);
  
    // Initialize the game
    restartGame();
  });
  