// "use strict";
// let minus = document.querySelectorAll('.calc-item__operator_null');
// let number = minus.nextElementSibling.value;
// if (Number(number) < 1) {
//   minus.classList.add('calc-item__operator_null');
// }

// debugger;
// console.log(document.querySelectorAll('.calc-item__wrapper'));
// alert("hello");

// let calcItems = document.querySelectorAll(".calc-item__wrapper");
// let minus = calcItems.children.querySelector[0];
// let number = calcItems.children.querySelectorAll[1];
// alert(number);
// let ff = calcItems.input.value;

// function lowInput() {
//   this.nextElementSibling.stepDown();
//   let calcItemsInput = document.querySelectorAll(".calc-item__wrapper input");
//   console.log(calcItemsInput[0].value);
//   let inputValue = calcItemsInput[0].value;
//   if (Number(inputValue) < 1) {
//     let minus = calcItemsInput[0].previousElementSibling;
//     minus.classList.add("calc-item__operator_null");
//   }
// }
// ------------

//   // После загрузки DOM получаем кнопку минус и значение input
//   // let minus = document.querySelector('.calc-item__wrapper button');
//   // let inputValue = document.querySelector('.calc-item__wrapper input');
//   // inputValue = Number(inputValue.value);
//   // console.log(inputValue);
//   let minus = document.querySelector('.calc-item__wrapper button');
//   let inputValue = document.querySelector('.calc-item__wrapper input');
//   inputValue = Number(inputValue.value);
//   // debugger
//   document.querySelector('.calc-item__wrapper input').innerHTML = inputValue - 1;
//   if (inputValue < 2) {
//     minus.classList.add("calc-item__operator_null");
//   }

// let minus = document.querySelector('.calc-item__wrapper button');
// minus.addEventListener("click", minusClick);

// function minusClick() {
//   let minus = document.querySelector('.calc-item__wrapper button');
//   let inputValue = document.querySelector('.calc-item__wrapper input');
//   inputValue = Number(inputValue.value);
//   // debugger
//   document.querySelector('.calc-item__wrapper input').innerHTML = inputValue - 1;
//   this.nextElementSibling.stepDown();
//   if (inputValue < 2) {
//     minus.classList.add("calc-item__operator_null");
//   }
// }

// прослушиватель событий, когда DOM загружен
// document.addEventListener("DOMContentLoaded", function gen(ob) {
//   // calcItems(this);
//   let num = Math.random();
//   ob.value = num;
//   console.log(num);
// });

// function calcItems(it) {
//   debugger;
//   // let roditel = it.parentNode;
//   // let num = Number(roditel.querySelector("input"));
//   let num = it.nextElementSibling;
//   console.log(num);
// }

// alert("bla-bla");
// let num = Math.random();
// function gen(ob) {
//   let num = Math.random();
//   ob.value = num;
//   console.log(num);
// }
// function gena() {
//   console.log("hello");
// }
// const genaButton = document.querySelector('.gen-class-some')
// genaButton.addEventListener('click', (event) => {
//   let num = Math.random();
//   // ob.value = num;
//   console.log(num);
// })

function frash() {
  let minus = document.querySelectorAll(".calc-item__wrapper");
  for (i = 0; i < minus.length; i++) {
    let minusik = minus[i].firstElementChild;
    let num = minusik.nextElementSibling;
    let numik = Number(num.value);
    if (numik <= 0) {
      minusik.classList.add("calc-item__operator_null");
    } else {
      minusik.classList.remove("calc-item__operator_null");
    }
  }
}

function funDown() {
  let num = this.nextElementSibling;
  let guests = Number(num.value);
  if (guests > 0) {
    num.value = guests - 1;
    guests = Number(num.value);
  }
  frash();
}

function funUp() {
  let num = this.previousElementSibling;
  num.value = Number(num.value) + 1;
  frash();
}

let calcDown = document.querySelectorAll(".calc-item__wrapper");
for (i = 0; i < calcDown.length; i++) {
  calcDown[i].firstElementChild.addEventListener("click", funDown);
}

let calcUp = document.querySelectorAll(".calc-item__wrapper");
for (i = 0; i < calcDown.length; i++) {
  calcUp[i].lastElementChild.addEventListener("click", funUp);
}

// let calcDown = document.querySelector(".calc-item__wrapper").firstElementChild;
// calcDown.addEventListener("click", funDown);

// let calcUp = document.querySelector(".calc-item__wrapper").lastElementChild;
// calcUp.addEventListener("click", funUp);
