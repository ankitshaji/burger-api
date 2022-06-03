//random burger generator

const beerDisplay = document.querySelector(".name");
const button = document.querySelector(".button");
//GET
function getData() {
  fetch("https://my-burger-api.herokuapp.com/burgers")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const randomNumber = Math.random() * data.length;
      const randomInteger = Math.floor(randomNumber);
      const name = data[randomInteger].name;
      console.log(name);
      beerDisplay.innerHTML = name;
    });
}

button.addEventListener("click", getData);
