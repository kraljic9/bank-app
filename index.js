// Main Page Elements

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

// Profile Page Elements

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

let accountsStorage = [];

registerContainerBtn.addEventListener("click", function () {
  let userName = registerInputName.value;
  let userPassword = passwordRegister.value;
  let userConfirmPassowrd = passwordConfirm.value;

  class bankAccount {
    constructor(name, password, balance) {
      this.name = name;
      this.password = password;
      this.balance = balance;
    }
  }

  if (userPassword === userConfirmPassowrd) {
    console.log(new bankAccount(userName, userPassword, 10000));
    accountsStorage.push(new bankAccount(userName, userPassword, 10000));
    localStorage.setItem("accountsStorage", JSON.stringify(accountsStorage));
  } else {
    console.error("Please Confirm the password");
  }
});

// Login Container Btn function

loginContainerBtn.addEventListener("click", function () {
  let accounts = JSON.parse(localStorage.getItem("accountsStorage"));

  accounts.forEach((account) => {
    if (
      loginName.value === account.name &&
      passwordLogin.value === account.password
    ) {
      location.href = "profile.html";
    }
  });
});
