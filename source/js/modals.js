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
