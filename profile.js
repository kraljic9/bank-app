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

// Deposit container elements

let depositAmountInput = document.querySelector("#deposit-amount");

// Btns

let makeDepositBtn = document.querySelector(".make-deposit-btn");
let cancleDepositBtn = document.querySelector(".deposit-cancle-btn");

// Withdraw container elements

let withdrawAmountInput = document.querySelector("#withdraw-amount");

// Btns

let makeWithdrawBtn = document.querySelector(".make-withdraw-btn");
let cancleWithdrawBtn = document.querySelector(".withdraw-cancle-btn");

// Transaction container elements

let transactionAmountInput = document.querySelector("#transaction-amount");

// Btns

let makeTransactionBtn = document.querySelector(".make-transaction-btn");
let cancleTransactionBtn = document.querySelector(".transaction-cancle-btn");

let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));

document.addEventListener("DOMContentLoaded", () => {
  let depositArr = currentAccount.deposits;

  depositArr.forEach((deposit) => {
    let listItem = document.createElement("li");
    listItem.classList.add("deposit-li");
    listItem.innerText = `${deposit} $`;

    let listSpan = document.createElement("span");
    listSpan.classList.add("deposit-arrow");
    listSpan.innerText = "^";

    listItem.appendChild(listSpan);
    depositList.appendChild(listItem);
  });
});

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

cancleDepositBtn.addEventListener("click", () => {
  depositContainer.classList.toggle("display-none");
});

cancleWithdrawBtn.addEventListener("click", () => {
  withdrawContainer.classList.toggle("display-none");
});

cancleTransactionBtn.addEventListener("click", () => {
  transactionContainer.classList.toggle("display-none");
});

makeDepositBtn.addEventListener("click", () => {
  let depositArr = currentAccount.deposits;

  depositArr.push(depositAmountInput.value);
  depositContainer.classList.toggle("display-none");

  if (Number(depositAmountInput.value)) {
    depositArr.forEach((deposit) => {
      let listItem = document.createElement("li");
      listItem.classList.add("deposit-li");
      listItem.innerText = `${deposit}$+`;

      let listSpan = document.createElement("span");
      listSpan.classList.add("deposit-arrow");
      listSpan.innerText = "^";

      listItem.appendChild(listSpan);
      depositList.appendChild(listItem);
    });
  } else {
    console.log("Please enter a numeric value");
  }

  localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
});

makeWithdrawBtn.addEventListener("click", () => {
  let withdrawArr = currentAccount.withdraws;

  withdrawArr.push(withdrawAmountInput.value);
  withdrawContainer.classList.toggle("display-none");

  if (Number(withdrawAmountInput.value)) {
    withdrawArr.forEach((withdraw) => {
      let listItem = document.createElement("li");
      listItem.classList.add("withdraws-li");
      listItem.innerText = `-${withdraw}$`;

      let listSpan = document.createElement("span");
      listSpan.classList.add("withdraw-arrow");
      listSpan.innerText = "⌄";

      listItem.appendChild(listSpan);
      withdrawList.appendChild(listItem);
    });
  } else {
    console.log("Please enter a numeric value");
  }

  localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
});
