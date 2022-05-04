const header_cart_list = document.querySelector(".header__cart-list");
const header_cart_wrap = document.querySelector(".header__cart-wrap");
const header_cart_list_wrap = document.querySelector(".header__cart-list-wrap");
const category_item_links = document.querySelectorAll(".category-item__link");
const home_filter_btn = document.querySelectorAll(".home-filter__btn");

// hide/show cart list
header_cart_wrap.onclick = () => {
  header_cart_list.classList.toggle("header__cart-list--active");
};
header_cart_list_wrap.onclick = (e) => {
  e.stopPropagation();
};

// active category
category_item_links.forEach((currentItem) => {
  currentItem.onclick = () => {
    category_item_links.forEach((item) => {
      item.parentElement.classList.remove("category-item--active");
      currentItem.parentElement.classList.add("category-item--active");
    });
  };
});
// active filter btn
home_filter_btn.forEach((currentItem) => {
  currentItem.onclick = () => {
    home_filter_btn.forEach((item) => {
      item.classList.remove("btn--primary");
      currentItem.classList.add("btn--primary");
    });
  };
});
