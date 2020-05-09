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

// прослушиватель событий, когда DOM загружен
document.addEventListener("DOMContentLoaded", frash());

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
