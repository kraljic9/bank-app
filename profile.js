// Profile Page Elements

// Users information

let profileUserName = document.querySelector(".user-name");
let profileBalance = document.querySelector(".balance");
let profileSpendingSum = document.querySelector(".spending-sum");

// Buttons

let signoutBtn = document.querySelector(".nav-signOut");

// User transaction lists

let depositList = document.querySelector(".deposits-list");
let withdrawList = document.querySelector(".withdraws-list");
let transactionList = document.querySelector(".transactions-list");

// User transaction buttons

let depositBtn = document.querySelector(".make-deposit");
let withdrawBtn = document.querySelector(".make-withdraw");
let transactionBtn = document.querySelector(".make-transaction");

let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

profileUserName.textContent = `${currentAccount.name}`;
profileBalance.textContent = `${currentAccount.balance}$`;

signoutBtn.addEventListener("click", function () {
  currentAccount = "";
  localStorage.setItem("currentAccount", currentAccount);
  location.href = "index.html";
});
