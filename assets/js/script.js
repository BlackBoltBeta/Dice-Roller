// Determine random number
function diceroll(num) {
  let randomNumber = Math.floor(Math.random() * num) + 1;
    console.log("bananwaffle")
    printNumber(randomNumber)
}

//Print diceroll
function printNumber(number) {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerText = number;
}

let button = document.getElementById('button');

// Select dice type
button.onclick = function() {
  
let diceSide = document.getElementById('diceSide');
     let selected = diceSide.options[diceSide.selectedIndex].text;
     if(selected === 'sixSided'){
      diceroll(6);
     } else if (selected === 'eightSided') {
      diceroll(8);
    } else if (selected === 'tenSided') {
      diceroll(10);
    } else if (selected === 'twentySided') {
      diceroll(20);
    }
    printNumber(result);
  };

  // Variables from DOM
const themeButton = document.getElementById("themeButton");

let isLightTheme = true;

// Switch themes
const switchTheme = () => {
	const themeStyleSheet = document.getElementById("themeStyleSheet");

	const newStyleSheet = isLightTheme
		? "assets/css/dark.css"
		: "assets/css/light.css";

	themeStyleSheet.setAttribute("href", newStyleSheet);

	themeButton.innerHTML = isLightTheme
		? `<i class="fa-solid fa-sun"></i>`
		: `<i class="fa-solid fa-moon"></i>`

	isLightTheme = !isLightTheme;
};

themeButton.addEventListener("click", switchTheme);