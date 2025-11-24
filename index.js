// Buttons
let navLoginBtn = document.querySelector(".nav-login");
let navRegisterBtn = document.querySelector(".nav-register");
let mainLoginBtn = document.querySelector(".main-login");
let mainRegisterBtn = document.querySelector(".main-register");

// Containers
let loginContainer = document.querySelector(".login-container");
let registerContainer = document.querySelector(".register-container");

navLoginBtn.addEventListener("click", function () {
  loginContainer.classList.toggle("display-none");
});
