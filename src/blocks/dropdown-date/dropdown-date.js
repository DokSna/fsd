let el_date = document.querySelector('.daters');
let button_date = document.querySelector('.but_daters');

// el_date.addEventListener(click, openDate)
// #switch-1:checked ~ .slayder-icon label:nth-child(1) a,
//
console.log(el_date);
console.log(button_date);
// checked: false;
// el_date.checked = true;

button_date.addEventListener('click', function() {
  let s_date = this.previousElementSibling;
  console.log(s_date);
  s_date.click();
});
