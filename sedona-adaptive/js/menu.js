var burger = document.querySelector(".main-header__burger-btn-wrapper");
var menu = document.querySelector(".main-nav");
var close = document.querySelector(".main-nav__close-btn");

close.addEventListener("click", function(event) {
event.preventDefault();
menu.classList.add("main-nav--close");
burger.classList.add("main-header__burger-btn-wrapper--show");
});

burger.addEventListener("click", function(event) {
event.preventDefault();
menu.classList.remove("main-nav--close");
menu.classList.add("main-nav--open");
burger.classList.remove("main-header__burger-btn-wrapper--show");
});

