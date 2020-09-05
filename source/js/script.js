/* Блок, отвечающий за открытие/закрытие меню на мобильной версии */

const navToggle = document.querySelector('.main-nav__toggle');
const navMain = document.querySelector('.main-nav');

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

const modalWindow = document.querySelector(".page-modal");
const orderButton = document.querySelector(".product__order-button");
const addButton = document.querySelector(".to-cart__add-button");
const toCartButtons = document.querySelectorAll(".goods-card__to-cart");

if (orderButton) {
  orderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("hidden");
  });
}

for (let toCart_button of toCartButtons) {
  toCart_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("hidden");
  });
};

addButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("hidden");
});
