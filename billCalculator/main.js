const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");

const error = document.querySelector(".error");
const btn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
let cost = document.querySelector(".cost");




const checkForm = () => {
    if (price.value == "" || people.value == "" || tip.value == 0) {

        error.textContent = "please fill all the forms!";
        costInfo.style.display = "none";

    } else {
        error.textContent = "";
        countBill();

    }

};


const countBill = () => {

    const newPrice = parseFloat(price.value);
    const newTip = parseFloat(tip.value);
    const newPeople = parseInt(people.value);

    const Summary = (newPrice + (newPrice * newTip)) / newPeople;

    costInfo.style.display = "block";
    cost.textContent = Summary.toFixed(2);
};





btn.addEventListener("click", checkForm);