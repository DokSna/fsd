// let dropDowns = document.querySelectorAll(".dropdown");
// for (i = 0; i < dropDowns.length; i++) {
//   calcItems = dropDowns[i].querySelectorAll(".calc-item__value");
//   let calcItemsSum = 0;
//   for (j = 0; j < calcItems.length; j++) {
//     calcItemsSum += Number(calcItems[j].value);
//   }
//   let info = dropDowns[i].querySelector(".dropdown__info > input");
//   info.value = calcItemsSum;
// }
function dropDownsys() {
  let dropDowns = document.querySelectorAll(".dropdown");
  for (i = 0; i < dropDowns.length; i++) {
    calcItems = dropDowns[i].querySelectorAll(".calc-item__value");
    let calcItemsSum = 0;
    for (j = 0; j < calcItems.length; j++) {
      calcItemsSum += Number(calcItems[j].value);
    }
    let info = dropDowns[i].querySelector(".dropdown__info > input");
    info.value = calcItemsSum;
  }
}

document.addEventListener('DOMContentLoaded', dropDownsys())

let calcClick = document.querySelectorAll(".calc-item__operator");
// debugger
for (i = 0; i < calcClick.length; i++) {
  calcClick[i].addEventListener("click", dropDownsys);
}

function calcItemClear(e) {
  let parentCalcButtons = this.parentElement;
  let parentCalcItems = parentCalcButtons.parentElement;
  // for (i = 0; i < parentCalcItems.length; i++) {
    let CalcItems = parentCalcItems.querySelectorAll('.calc-item__value');
    // for (j = 0; j < CalcItems.length; j++) {
    //   CalcItems[j].value = 0;
    // }
    CalcItems.forEach(item => item.value = 0);
    dropDownsys();
    frash();
  // }
}

let calcButtonsClear = document.querySelectorAll('.calc-buttons_clear');
calcButtonsClear.forEach(el => el.addEventListener('click', calcItemClear));
// for (i = 0; i < calcButtonsClear.length; i++) {
//   calcButtonsClear[i].addEventListener("click", console.log('hi'));
// }

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
