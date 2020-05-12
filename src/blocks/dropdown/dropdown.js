// склонение слов (1 гость, 2 гостя, 5 гостей)
function declension(number, a1, b2, c5) {
  let text = "";
  let num1 = number % 10;
  let num2 = number % 100;
  if (
    (num2 >= 5 && num2 <= 20) ||
    (num1 >= 5 && num1 <= 9) ||
    (num1 == 0 && number != 0)
  ) {
    return (text = String(number) + c5);
  } else if (num1 >= 2 && num1 <= 4) {
    return (text = String(number) + b2);
  } else if (num1 == 1) {
    return (text = String(number) + a1);
  } else return (text = "");
}

// заполняем шапку количеством гостей
function dropDownsays() {
  let dropDowns = document.querySelectorAll(".dropdown");
  dropDowns.forEach(function(dropDown) {
    let calcItems = dropDown.querySelectorAll(".calc-item__value");
    let adultsNum, childrenNum, babiesNum;
    calcItems.forEach(function(calcItem) {
      if ("adults" == calcItem.getAttribute("name")) {
        adultsNum = Number(calcItem.value);
      }
      if ("children" == calcItem.getAttribute("name")) {
        childrenNum = Number(calcItem.value);
      }
      if ("babies" == calcItem.getAttribute("name")) {
        babiesNum = Number(calcItem.value);
      }
    });

    let info = dropDown.querySelector(".dropdown__info > input");
    let babiesNums = declension(
      babiesNum,
      " младенец",
      " младенца",
      " младенцев"
    );
    let guests = declension(
      adultsNum + childrenNum,
      " гость",
      " гостя",
      " гостей"
    );

    if (adultsNum + childrenNum > 0 && babiesNum > 0) {
      info.value = guests + ", " + babiesNums;
    } else if (adultsNum + childrenNum > 0 || babiesNum > 0) {
      info.value = guests + babiesNums;
    } else info.value = "";

    let aClear = dropDown.querySelector(".calc-buttons_clear");
    if (adultsNum + childrenNum + babiesNum > 0) {
      aClear.classList.add("calc-buttons_clear-vis");
    }
    if (adultsNum + childrenNum + babiesNum == 0) {
      aClear.classList.remove("calc-buttons_clear-vis");
    }
  });
}

document.addEventListener("DOMContentLoaded", dropDownsays());
document.addEventListener("DOMContentLoaded", dropDownsaysi());

function dropDownsaysi() {
  let dropDowns = document.querySelectorAll(".dropdown");
  dropDowns.forEach(function(dropDown) {
    // свернуть или развернуть dropdown
    if (dropDown.getAttribute("show") == 1) {
      dropdownCalculator = dropDown.querySelector(".dropdown__calculator");
      dropdownCalculator.classList.toggle("dropdown__calculator_show");
      inf = dropDown.querySelector('.dropdown__info');
      inf.classList.toggle("dropdown__info_border");
    }
  });
}

let calcClick = document.querySelectorAll(".calc-item__operator");
for (i = 0; i < calcClick.length; i++) {
  calcClick[i].addEventListener("click", dropDownsays);
}

function calcItemClear(e) {
  let parentCalcButtons = this.parentElement;
  let parentCalcItems = parentCalcButtons.parentElement;
  let CalcItems = parentCalcItems.querySelectorAll(".calc-item__value");
  CalcItems.forEach((item) => (item.value = 0));
  dropDownsays();
  frash();
}

let calcButtonsClear = document.querySelectorAll(".calc-buttons_clear");
calcButtonsClear.forEach((el) => el.addEventListener("click", calcItemClear));

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

// кнопка скрыть/показать калькулятор
let showCalc = document.querySelectorAll(".dropdown__info > button");
showCalc.forEach((el) => el.addEventListener("click", funShowCalc));

function funShowCalc(e) {
  let inf = this.parentElement;
  inf.classList.toggle("dropdown__info_border");

  let calc = inf.nextElementSibling;
  calc.classList.toggle("dropdown__calculator_show");
}
