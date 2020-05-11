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

function dropDownsays() {
  // debugger;
  let dropDowns = document.querySelectorAll(".dropdown");
  dropDowns.forEach(function(dropDown) {
    let calcItems = dropDown.querySelectorAll(".calc-item__value");
    let adultsNum, childrenNum, babiesNum;
    calcItems.forEach(function(calcItem) {
      if ("adults" == calcItem.getAttribute('name')) {
        adultsNum = Number(calcItem.value);
      }
      if ("children" == calcItem.getAttribute('name')) {
        childrenNum = Number(calcItem.value);
      }
      if ("babies" == calcItem.getAttribute('name')) {
        babiesNum = Number(calcItem.value);
      }
    }
    )
    let info = dropDown.querySelector(".dropdown__info > input");
    info.value = adultsNum + childrenNum + " гостей" + ", " + babiesNum + " младенцев";
  });
}

document.addEventListener('DOMContentLoaded', dropDownsays())

let calcClick = document.querySelectorAll(".calc-item__operator");
for (i = 0; i < calcClick.length; i++) {
  calcClick[i].addEventListener("click", dropDownsays);
}

function calcItemClear(e) {
  let parentCalcButtons = this.parentElement;
  let parentCalcItems = parentCalcButtons.parentElement;
    let CalcItems = parentCalcItems.querySelectorAll('.calc-item__value');
    CalcItems.forEach(item => item.value = 0);
    dropDownsays();
    frash();
}

let calcButtonsClear = document.querySelectorAll('.calc-buttons_clear');
calcButtonsClear.forEach(el => el.addEventListener('click', calcItemClear));

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
