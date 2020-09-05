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
