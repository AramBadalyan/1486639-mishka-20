/* Блок, отвечающий за открытие/закрытие меню на мобильной версии */

var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* Блок вызова/закрытия модального окна */

const modal_window = document.querySelector(".page-modal");
const order_button = document.querySelector(".product__order-button");
const add_button = document.querySelector(".to-cart__add-button");
const toCart_buttons = document.querySelectorAll(".goods-card__to-cart");

if (order_button) {
  order_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_window.classList.remove("hidden");
  });
}

for (let toCart_button of toCart_buttons) {
  toCart_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_window.classList.remove("hidden");
  });
};

add_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_window.classList.add("hidden");
});
