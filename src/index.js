//Random burger generator

const beerDisplay = document.querySelector(".name");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

//GET - Request
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

//POST - Request
function postData(data) {
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      beerDisplay.innerHTML = data.name;
    })
    .catch((error) => {
      console.error("Error:", error);
      beerDisplay.innerHTML = "Error POST";
    });
}

//PUT - Requests
function editData(data) {
  fetch("", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      beerDisplay.innerHTML = data.name;
    })
    .catch((error) => {
      console.error("Error:", error);
      beerDisplay.innerHTML = "Error PUT";
    });
}
//DELETE -Request
function deleteData(link3) {
  fetch(link3, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      //data is empty -deleted
      console.log("Success: ", data);
      beerDisplay.innerHTML = "Object Deleted";
    })
    .catch((error) => {
      console.error("Error: ", error);
      beerDisplay.innerHTML = "Error DELETE";
    });
}

//DELETE-data
const link3 = "https://my-burger-api.herokuapp.com/burgers/7";
const data3 = {
  id: 7,
  name: "MEISTER ALLER KLASSEN",
  restaurant: "Burgermeister",
  web: "https://burger-meister.de",
  description: "Fast food joint located in a public toilet? Why on earth?!",
  ingredients: [
    "2 x meat",
    "2 x cheese",
    "bacon",
    "barbequesauce",
    "jalapenos",
  ],
  addresses: [
    {
      addressId: 0,
      number: "1",
      line1: "Potsdamer Platz",
      line2: "Berlin",
      postcode: "10785",
      country: "Germany",
    },
    {
      addressId: 1,
      number: "45",
      line1: "Eberswalder, Schönhauser Allee",
      line2: "Berlin",
      postcode: "10435",
      country: "Germany",
    },
  ],
};

//PUT-data
const link2 = "https://my-burger-api.herokuapp.com/burgers/4";
const data2 = {
  id: 4,
  name: "Crunchy Nacho Burger",
  restaurant: "Max Burgers",
  web: "https://www.max.se/maten/meny/burgare/crunchy-nacho-burger/",
  description:
    "The best combination of crunchiness and softness, all in one single burger",
  ingredients: [
    "sesame bun",
    "salsa",
    "cheddar",
    "nachos",
    "beef",
    "tomato",
    "pickled onion",
    "lettuce",
    "jalapeño mayonnaise",
  ],
  addresses: [
    {
      addressId: 0,
      number: "123",
      line1: "Skeppsbrogatan",
      line2: "Luleå",
      postcode: "971 25",
      country: "Sweden",
    },
  ],
};

//POST-data
const link1 = "https://my-burger-api.herokuapp.com/burgers";
const data1 = {
  id: 28,
  name: "Mc Fly",
  restaurant: "Burger Burger",
  web: "https://burgerburger.co.nz/",
  description:
    "We believe in the power of great Kiwi hospitality to bring people together. We are a laid-back meeting place where friends and family can have great chats and bond in a space with character, with a burger or beersie in hand.",
  ingredients: [
    "fried chicken",
    "bacon",
    "swiss cheese",
    "mayo",
    "cos lettuce",
    "bbq sauce",
  ],
  addresses: [
    {
      addressId: 0,
      number: "3B",
      line1: "York Street, Newmarket",
      line2: "Brown Street, Ponsonby",
      postcode: "1023",
      country: "Auckland",
    },
  ],
};

button1.addEventListener("click", getData);
button2.addEventListener("click", postData(data1));
button3.addEventListener("click", editData(data2));
button4.addEventListener("click", deleteData(link3));
