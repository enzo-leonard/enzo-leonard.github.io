import message from "../lib/hello"
import { EIDRM } from "constants";

console.log(message);

let activeColor= "grey"
const pixels = document.querySelectorAll('.grid div')
const rotateBtn = document.querySelector('#rotate')
const container = document.querySelector('.container-grid')
const grey = document.querySelector('#grey')
const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')

red.addEventListener('click', () => {red.classList.toggle('active'); activeColor = "red"})
grey.addEventListener('click', () => {grey.classList.toggle('active'); activeColor = "grey"})
rotateBtn.addEventListener('click', () => {container.classList.toggle('rotate')})
pixels.forEach(pixel => pixel.addEventListener('click', (e) => {console.log(e.currentTarget); e.currentTarget.classList.toggle(activeColor)}) )