
// Generate random number 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let rollDice = () => getRandomIntInclusive(1, 6);

  document.getElementById("roll").addEventListener("click", function () {
    
  // Roll dice for player
    const player1Score = rollDice();
    
  // Empty string to store result
    let result = "";
  // Display the result
    document.getElementById("results").innerHTML = `
    <p>${player1Score}</p>`;
  });