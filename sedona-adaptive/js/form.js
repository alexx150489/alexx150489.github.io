var form = document.querySelector("form");
var tel = form.querySelector("[type=tel]");
var telAlt = form.querySelector("[name=tel-alt]");

var email = form.querySelector("[name=email]");
var success = document.querySelector(".main-form__success");
var closeSuccess = document.querySelector(".main-form__success-button");
var failure = document.querySelector(".main-form__failure");
var closeFailure = document.querySelector(".main-form__failure-button");

form.addEventListener("submit", function(event) {
  if (!tel.value) {
    event.preventDefault();
    failure.classList.add("main-form__failure-show");
  } else {
    event.preventDefault();
    success.classList.add("main-form__success-show");
  }
});


closeFailure.addEventListener("click", function(event) {
event.preventDefault();
failure.classList.remove("main-form__failure-show");
});

closeSuccess.addEventListener("click", function(event) {
event.preventDefault();
success.classList.remove("main-form__success-show");
});














