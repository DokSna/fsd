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
