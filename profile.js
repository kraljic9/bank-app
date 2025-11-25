// Profile Page Elements

// Users information

let profileUserName = document.querySelector(".user-name");
let profileBalance = document.querySelector(".balance");
let profileSpendingSum = document.querySelector(".spending-sum");

// User transaction lists

let depositList = document.querySelector(".deposits-list");
let withdrawList = document.querySelector(".withdraws-list");
let transactionList = document.querySelector(".transactions-list");

// User transaction buttons

let depositBtn = document.querySelector(".make-deposit");
let withdrawBtn = document.querySelector(".make-withdraw");
let transactionBtn = document.querySelector(".make-transaction");

let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

console.log(currentAccount);
