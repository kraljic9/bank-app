// Buttons
let navLoginBtn = document.querySelector(".nav-login");
let navRegisterBtn = document.querySelector(".nav-register");
let mainLoginBtn = document.querySelector(".main-login");
let mainRegisterBtn = document.querySelector(".main-register");

// Containers
let loginContainer = document.querySelector(".login-container");
let registerContainer = document.querySelector(".register-container");

// Container buttons
let loginCancleBtn = document.querySelector(".login-cancle-btn");
let registerCancleBtn = document.querySelector(".register-cancle-btn");

navLoginBtn.addEventListener("click", function () {
  loginContainer.classList.toggle("display-none");
});

navRegisterBtn.addEventListener("click", function () {
  registerContainer.classList.toggle("display-none");
});

mainLoginBtn.addEventListener("click", function () {
  loginContainer.classList.toggle("display-none");
});

mainRegisterBtn.addEventListener("click", function () {
  registerContainer.classList.toggle("display-none");
});

loginCancleBtn.addEventListener("click", function () {
  loginContainer.classList.toggle("display-none");
});

registerCancleBtn.addEventListener("click", function () {
  registerContainer.classList.toggle("display-none");
});
