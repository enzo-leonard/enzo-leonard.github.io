const root = document.querySelector("#root");
const btn = document.querySelector("#add-btn");
const txt = document.querySelector("#txt");
const nChecked = document.querySelector("#n-checked");
const nTotal = document.querySelector("#n-total");

import Sortable from 'sortablejs';

import list from "../lib/data"


list.forEach((item) => {
    root.insertAdjacentHTML(
        "afterbegin",
        `<div class="item"> <div class="fa square"></div><p>${item.name}</p><i class="fas fa-times"></div>`
    );
});

const setCounter = () => {
    nTotal.innerHTML = document.querySelectorAll(".item:not(.hidden)").length - 1;
    nChecked.innerHTML = document.querySelectorAll(".item:not(.hidden) .fa-check").length;
}


const closeBtns = document.querySelectorAll(".fa-times");
const squares = document.querySelectorAll(".square");

const toggleCheck = (e) => {
    e.currentTarget.classList.toggle("fa-check");
    setCounter()
}

const dismissItem = (e) => {
    e.path[1].classList.add("hidden");
    setCounter()
}

closeBtns.forEach((btn) => {
    btn.addEventListener("click", dismissItem);
});

squares.forEach((btn) => {
    btn.addEventListener("click", toggleCheck);
});


const addElement = () => {
    root.insertAdjacentHTML(
        "afterbegin",
        `<div class="item"> <div class="fa square"></div><p>${txt.value}</p><i class="fas fa-times"></div>`
    );
    document
        .querySelectorAll(".square")[1]
        .addEventListener("click", toggleCheck);
    document
        .querySelectorAll(".fa-times")[0]
        .addEventListener("click", dismissItem);
    txt.value = null
    setCounter()

}


btn.addEventListener("click", addElement)



setCounter()

var sortable = Sortable.create(root);

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode == 13) {
        console.log('enter')
        addElement()
    }

}