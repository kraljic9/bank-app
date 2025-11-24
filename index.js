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
let registerContainerBtn = document.querySelector(".register-container-btn");
let loginContainerBtn = document.querySelector(".login-container-btn");

// Register input fields
let registerInputName = document.querySelector("#name-register");
let passwordRegister = document.querySelector("#password-register");
let passwordConfirm = document.querySelector("#password-confirm");

// Login input fields
let loginName = document.querySelector("#name-login");
let passwordLogin = document.querySelector("#password-login");

// Nav buttons functions
navLoginBtn.addEventListener("click", function () {
  loginContainer.classList.toggle("display-none");
});

navRegisterBtn.addEventListener("click", function () {
  registerContainer.classList.toggle("display-none");
});

// Main buttons functions
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

// Register Container Btn function

registerContainerBtn.addEventListener("click", function () {
  console.log(registerInputName.value);
  console.log(passwordRegister.value);
  console.log(passwordConfirm.value);
});

// Login Container Btn function

loginContainerBtn.addEventListener("click", function () {
  console.log(loginName.value);
  console.log(passwordLogin.value);
});
