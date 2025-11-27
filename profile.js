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

// Transaction containers

let depositContainer = document.querySelector(".deposit-container");
let withdrawContainer = document.querySelector(".withdraw-container");
let transactionContainer = document.querySelector(".transaction-container");

let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

profileUserName.textContent = `${currentAccount.name}`;
profileBalance.textContent = `${currentAccount.balance}$`;

signoutBtn.addEventListener("click", function () {
  currentAccount = "";
  localStorage.setItem("currentAccount", currentAccount);
  location.href = "index.html";
});

depositBtn.addEventListener("click", () => {
  depositContainer.classList.toggle("display-none");
});

withdrawBtn.addEventListener("click", () => {
  withdrawContainer.classList.toggle("display-none");
});

transactionBtn.addEventListener("click", () => {
  transactionContainer.classList.toggle("display-none");
});
