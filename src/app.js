/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

var cardsArray = [];
var contLogs = 0;

function createCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let cardValue = 0;

  let suit = suits[Math.floor(Math.random() * suits.length)];
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  let color = "";
  if (suits.indexOf(suit) < 2) color = "text-danger";

  cardValue = numbers.indexOf(number);

  //Spade < hearst < diamons < club;
  switch (suits.indexOf(suit)) {
    //diamons
    case 0:
      cardValue += 0.2;
      break;
    //hearts
    case 1:
      cardValue += 0.1;
      break;
    //spade
    case 2:
      break;
    //club
    case 3:
      cardValue += 0.3;
      break;
  }

  let html = `<div class="col-12 text-start spade ${color}">
            ${suit}
          </div><div class="col-12 number text-center ${color}">
            ${number}
          </div><div class="col-12 text-end spade backwards ${color}">
            ${suit}
          </div>`;

  let div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = html;
  let cards = document.querySelector(".cards");
  cards.appendChild(div);
  return cardValue;
}

window.createCards = function createCards() {
  cardsArray = [];
  let cards = document.querySelector(".cards");
  cards.innerHTML = "";
  contLogs = 0;
  let number = document.querySelector("#numberCard");

  for (let i = 0; i < number.value; i++) {
    cardsArray.push(createCard());
  }
};

const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    print(arr);
    contLogs++;
    wall--; //decrease the wall for optimization
  }
  return arr;
};

function print(arr) {
  let html = `<div class="logs${contLogs} d-flex">${contLogs}</div>`;
  let div = document.createElement("div");

  div.innerHTML = html;
  let divClass = ".logs";
  let cards = document.querySelector(divClass);
  cards.appendChild(div);
  divClass = ".logs" + contLogs;
  for (let i = 0; i < arr.length; i++) {
    createCardByValue(arr[i], divClass);
  }
}

function createCardByValue(value, divId) {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let suit = "";
  let color = "";

  let number = numbers[Math.floor(value)];

  value = value - Math.floor(value);

  if (value < 0.1) {
    suit = suits[2];
  } else if (value < 0.2) {
    suit = suits[1];
    color = "text-dang;er";
  } else if (value < 0.3) {
    suit = suits[0];
    color = "text-danger";
  } else {
    suit = suits[3];
  }
  
  let html = `<div class="col-12 text-start spade ${color}">
            ${suit}
          </div><div class="col-12 number text-center ${color}">
            ${number}
          </div><div class="col-12 text-end spade backwards ${color}">
            ${suit}
          </div>`;

  let div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = html;
  let cards = document.querySelector(divId);

  cards.appendChild(div);
}

window.sort = function sort() {
  let divClass = ".logs";
  let cards = document.querySelector(divClass);
  cards.innerHTML = "";
  cardsArray = bubbleSort(cardsArray);

  console.log(cardsArray);
};
