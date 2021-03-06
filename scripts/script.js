let foodSelected = false;
let drinksSelected = false;
let dessertsSelected = false;
let wpp;

function removeClass(elementList) {  
    for (var i = 0; i < elementList.length; i++) {
        elementList[i].classList.remove("selected")
  }
}

function select(id, category, selected) {
    if (selected === true) {
        const elementList = document.querySelectorAll(category);
        removeClass(elementList);
    }
    const element = document.getElementById(id);
    element.classList.add("selected");
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
    buildCheckout()
    const element = document.querySelector(".overlay");
    element.classList.toggle("finish-order");
}

// Checkout
function buildCheckout() {
    const itemsList = document.querySelectorAll(".selected .item-name");
    let itemsListCheckout = document.querySelectorAll(".checkout-name");
    const pricesList = document.querySelectorAll(".selected .item-price");
    let pricesListCheckout = document.querySelectorAll(".checkout-price");
    let total = 0;
    for (var i = 0; i < itemsList.length; i++) {
        itemsListCheckout[i].innerHTML = itemsList[i].innerHTML.replace("R$ ", "");
        pricesListCheckout[i].innerHTML = pricesList[i].innerHTML.replace("R$ ", "");
        let str = pricesListCheckout[i].innerHTML
        str = str.replace("R$ ", "");
        str = str.replace(",", ".");
        total += parseFloat(str);
        console.log(total);
    }
    total = (Math.round((total) * 10) / 10).toFixed(2);
    total = "R$ " + total.replace(".", ",");
    document.querySelector(".total").innerHTML = total;
    wpp = "Ol??, gostaria de fazer o pedido:\n" + "- Prato: " + itemsListCheckout[0].innerHTML + "\n- Bebida: " + itemsListCheckout[1].innerHTML + "\n- Sobremesa: " + itemsListCheckout[2].innerHTML + "\nTotal: " + total;
    wpp = encodeURIComponent(wpp);
    wpp = "https://wa.me/5521912345678?text=" + wpp;
    document.querySelector("a").href = wpp;
}