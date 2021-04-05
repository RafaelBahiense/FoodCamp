let foodSelected = false;
let drinksSelected = false;
let dessertsSelected = false;

function removeClass(elementList) {  
    for (var i = 0; i < elementList.length; i++) {
        elementList[i].classList.remove("selected")
  }
}

function select(id, category, selected) {
    if (selected === true) {
        const elementList = document.querySelectorAll(category);
        console.log(elementList)
        removeClass(elementList);
    }
    const element = document.getElementById(id);
    element.classList.add("selected");
    console.log(selected)
}

function foodSelect(id) {
    select(id, ".food .item", foodSelected)
    foodSelected = true;
    checkoutButton()
}

function drinksSelect(id) {
    select(id, ".drinks .item", drinksSelected)
    drinksSelected = true;
    checkoutButton()
}

function dessertsSelect(id) {
    select(id, ".desserts .item", dessertsSelected)
    dessertsSelected = true;
    checkoutButton()
}

// checkout button
function checkoutButton() {
    if (foodSelected === true && drinksSelected === true && dessertsSelected === true) {
        const element = document.querySelector("button");
        element.classList.add("ready");
        element.innerHTML = "Fechar pedido"
    }
}

// Overlay
function checkoutToggle() {
    const element = document.querySelector(".overlay");
    element.classList.toggle("finish-order");
}