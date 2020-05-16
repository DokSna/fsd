"use strict"
// склонение слов (1 гость, 2 гостя, 5 гостей)
function declension(number, a1, b2, c5) {
  let text = "";
  let num1 = number % 10;
  let num2 = number % 100;
  if ((num2 >= 5 && num2 <= 20) || (num1 >= 5 && num1 <= 9) || (num1 == 0 && number != 0)) {
    return (text = String(number) + c5);
  }
  else if (num1 >= 2 && num1 <= 4) {
    return (text = String(number) + b2);
  }
  else if (num1 == 1) {
    return (text = String(number) + a1);
  }
  else return (text = "");
}

// заполняем шапку количеством гостей
function dropDownsays() {
  let dropDowns = document.querySelectorAll(".dropdown");
  dropDowns.forEach(function (dropDown) {
    let calcItems = dropDown.querySelectorAll(".calc-item__value");
    let OneNum, TwoNum, ThreeNum;
    calcItems.forEach(function (calcItem) {
      if ("one" == calcItem.getAttribute("name")) {
        OneNum = Number(calcItem.value);
      }
      if ("two" == calcItem.getAttribute("name")) {
        TwoNum = Number(calcItem.value);
      }
      if ("three" == calcItem.getAttribute("name")) {
        ThreeNum = Number(calcItem.value);
      }
    });

    // перед отправкой склонений слов проверим, не стоит ли mode=room
    let info = dropDown.querySelector(".dropdown__info > input");
    let OneNumText = "";
    let TwoNumText = "";
    let ThreeNumText = "";
    let infoText = "";
    if (dropDown.getAttribute("mode") == "room") {
      OneNumText = declension(OneNum, " спальня", " спальни", " спален");
      TwoNumText = declension(TwoNum, " кровать", " кровати", " кроватей");
      ThreeNumText = declension(ThreeNum, " ванная комната", " ванные комнаты", " ванных комнат");

      infoText += OneNumText;
      if (OneNum > 0 && TwoNum > 0) {
        infoText += ", ";
      }
      infoText += TwoNumText;

      // if (OneNum + TwoNum > 0 && ThreeNum > 0) {
      if (OneNum > 0 && TwoNum > 0) {
        // infoText += ", ";
        infoText += "...";
      }
      // infoText += ThreeNumText;

      info.value = infoText;
    }
    else {
      OneNumText = declension(OneNum + TwoNum, " гость", " гостя", " гостей");
      TwoNumText = declension(ThreeNum, " младенец", " младенца", " младенцев");

      if (OneNum + TwoNum > 0 && ThreeNum > 0) {
        info.value = OneNumText + ", " + TwoNumText;
      } else if (OneNum + TwoNum > 0 || ThreeNum > 0) {
        info.value = OneNumText + TwoNumText;
      } else info.value = "";
    }

    // показывать или скрывать кнопку "очистить"
    let aClear = dropDown.querySelector(".calc-buttons_clear");
    if (OneNum + TwoNum + ThreeNum > 0) {
      aClear.classList.add("calc-buttons_clear-vis");
    }
    if (OneNum + TwoNum + ThreeNum == 0) {
      aClear.classList.remove("calc-buttons_clear-vis");
    }
  });
}

document.addEventListener("DOMContentLoaded", dropDownsays());
document.addEventListener("DOMContentLoaded", dropDownsaysi());
document.addEventListener("DOMContentLoaded", frash());

// сдесь мы вносим изменения в стандартную модель дропдауна
function dropDownsaysi() {
  let dropDowns = document.querySelectorAll(".dropdown");
  dropDowns.forEach(function (dropDown) {
    // калькулятор гостей или комнат (по умолчанию - гости)
    if (dropDown.getAttribute("mode") == "room") {
      if (dropDown.getAttribute("show") !== "closed") {
        let dropDownHeader = dropDown.querySelector(".dropdown__header");
        dropDownHeader.innerHTML = "dropdown <span>expanded</span>";
      }

      // убираем кнопки "очистить" и "применить"
      let calcButtons = dropDown.querySelector(".calc-buttons");
      calcButtons.classList.add("dropdown_room-hidden");
      // меняем ширину дропдауна
      dropDown.classList.add("dropdown_room");
      let calcWidth = dropDown.querySelector(".dropdown__calculator");
      calcWidth.classList.add("dropdown_room");
      // меняем надпись placeholder
      let infoInput = dropDown.querySelector(".dropdown__info > input");
      infoInput.setAttribute("placeholder", "Сколько спален, кроватей...");
      // меняем названия калькуриуемых строк в дропдауне (с гостей на => спальни и кровати)
      let calcItems = dropDown.querySelectorAll(".calc-item");
      let calcItemOne = calcItems[0];
      let calcItemTwo = calcItems[1];
      let calcItemThree = calcItems[2];

      let OneTitle = calcItemOne.querySelector(".calc-item__title > span");
      OneTitle.innerHTML = "спальни";
      // let OneName = calcItemOne.querySelector("input");
      // OneName.setAttribute("name", "bedroom");

      let TwoTitle = calcItemTwo.querySelector(".calc-item__title > span");
      TwoTitle.innerHTML = "кровати";
      // let TwoName = calcItemTwo.querySelector("input");
      // TwoName.setAttribute("name", "bed");

      let ThreeTitle = calcItemThree.querySelector(".calc-item__title > span");
      ThreeTitle.innerHTML = "ванные комнаты";
      // let ThreeName = calcItemThree.querySelector("input");
      // ThreeName.setAttribute("name", "bathroom");
    }

    // свернуть или развернуть dropdown
    if (dropDown.getAttribute("show") == "closed") {
      let dropDownHeader = dropDown.querySelector(".dropdown__header");
      dropDownHeader.innerHTML = "dropdown <span>default</span>";

      let dropdownCalculator = dropDown.querySelector(".dropdown__calculator");
      dropdownCalculator.classList.toggle("dropdown__calculator_show");
      if (dropDown.getAttribute("mode") !== "room") {
        let inf = dropDown.querySelector('.dropdown__info');
        inf.classList.toggle("dropdown__info_border");
      }
    }
    // заранее заполненые поля
    let one = Number(dropDown.getAttribute("one"));
    let two = Number(dropDown.getAttribute("two"));
    let three = Number(dropDown.getAttribute("three"));
    let Calculator = dropDown.querySelectorAll('.calc-item__wrapper');
    if (one > 0) {
      let calcItemInput = Calculator[0].querySelector('input');
      calcItemInput.value = one;
    }
    if (two > 0) {
      let calcItemInput = Calculator[1].querySelector('input');
      calcItemInput.value = two;
    }
    if (three > 0) {
      let calcItemInput = Calculator[2].querySelector('input');
      calcItemInput.value = three;
    }
  });
  dropDownsays();
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
  let dropDown = inf.parentElement.parentElement;
  if (dropDown.getAttribute("mode") !== "room") {
    inf.classList.toggle("dropdown__info_border");
  }

  let calc = inf.nextElementSibling;
  calc.classList.toggle("dropdown__calculator_show");
}
