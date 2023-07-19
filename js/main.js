const orderButton = document.querySelector("#order");
const orderDescription = document.querySelector("#orderDetails");

const dough = document.querySelector(".Dough");
const vegetables = document.querySelector(".Vegetables");
const cheeses = document.querySelector(".Cheeses");
const sauces = document.querySelector(".Sauces");
const meat = document.querySelector(".Meat");
const extra = document.querySelector(".Extra");

let arrDough = ["plane", "thin crust", "thick", "cheese stuffed"];
let arrVegetables = ["tomato", "mushroom", "bell paper"];
let arrCheeses = ["yellow", "white", "mixed"];
let arrSauces = ["mustard", "tomato", "hot pepper"];
let arrMeat = ["beef", "chicken", "vegetarian"];
let arrExtra = ["pickles", "hot peppers", "olives"];

function fillDropdown(element, options) {
  let selectedElement = document.querySelector(`.${element}`);

  for (let i = 0; i < options.length; i++) {
    let option = document.createElement("option");
    option.text = options[i];
    option.value = options[i];
    selectedElement.appendChild(option);
  }
}

fillDropdown("Dough", arrDough);
fillDropdown("Vegetables", arrVegetables);
fillDropdown("Cheeses", arrCheeses);
fillDropdown("Sauces", arrSauces);
fillDropdown("Meat", arrMeat);
fillDropdown("Extra", arrExtra);

function Pizza(dough, vegetables, cheeses, sauces, meat, extra) {
  this.dough = dough;
  this.vegetables = vegetables;
  this.cheeses = cheeses;
  this.sauces = sauces;
  this.meat = meat;
  this.extra = extra;
  this.pizzaDescription = function () {
    return `You ordered a pizza with ${this.dough} dough, ${this.vegetables}, ${this.cheeses} cheese, ${this.sauces} sauce, ${this.meat}, and ${this.extra}.`;
  };
}

orderButton.addEventListener("click", function (e) {
  e.preventDefault();
  
  const selectedDough = dough.options[dough.selectedIndex].value;
  const selectedVegetables = vegetables.options[vegetables.selectedIndex].value;
  const selectedCheeses = cheeses.options[cheeses.selectedIndex].value;
  const selectedSauces = sauces.options[sauces.selectedIndex].value;
  const selectedMeat = meat.options[meat.selectedIndex].value;
  const selectedExtra = extra.options[extra.selectedIndex].value;

  const pizza = new Pizza(
    selectedDough,
    selectedVegetables,
    selectedCheeses,
    selectedSauces,
    selectedMeat,
    selectedExtra
  );

  orderDescription.textContent = pizza.pizzaDescription();
});