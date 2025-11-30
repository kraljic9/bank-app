// Profile Page Elements

// Users information

let profileUserName = document.querySelector(".user-name");
let profileBalance = document.querySelector(".balance");
let profileSpendingSum = document.querySelector(".spending-sum");
let spendAmount = document.querySelector(".spend-amount");

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
let recipient = document.querySelector("#recipient-name");
// Btns

let makeTransactionBtn = document.querySelector(".make-transaction-btn");
let cancleTransactionBtn = document.querySelector(".transaction-cancle-btn");

let currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
let accountsArr = JSON.parse(localStorage.getItem("accountsStorage"));

// Load content
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

  let withdrawArr = currentAccount.withdraws;

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

  let transactionArr = currentAccount.transactions;

  transactionArr.forEach((transaction) => {
    let listItem = document.createElement("li");
    listItem.classList.add("transactions-li");
    listItem.innerText = `${transaction.amount}$`;

    let listSpan = document.createElement("span");
    listSpan.classList.add("transaction-to");
    listSpan.innerText = `${transaction.name}`;

    listItem.appendChild(listSpan);
    transactionList.appendChild(listItem);
  });

  profileUserName.textContent = `${currentAccount.name}`;
  profileBalance.textContent = `${currentAccount.balance}$`;
  spendAmount.textContent = 0;
});

// Signout

signoutBtn.addEventListener("click", function () {
  accountsArr.filter((account) => {
    if (currentAccount.name === account.name) {
      let accountIndex = accountsArr.indexOf(account);
      accountsArr.splice(accountIndex, 1, currentAccount);

      return accountsArr;
    }
  });

  currentAccount = "";
  localStorage.setItem("currentAccount", currentAccount);
  localStorage.setItem("accountsStorage", JSON.stringify(accountsArr));
  location.href = "index.html";
});

// Button event listeners for containers

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

// Button event listeners for transactions

makeDepositBtn.addEventListener("click", () => {
  let depositArr = currentAccount.deposits;

  if (Number(depositAmountInput.value)) {
    depositArr.push(depositAmountInput.value);
    depositContainer.classList.toggle("display-none");

    let listItem = document.createElement("li");
    listItem.classList.add("deposit-li");
    listItem.innerText = `${depositAmountInput.value}$+`;

    let listSpan = document.createElement("span");
    listSpan.classList.add("deposit-arrow");
    listSpan.innerText = "^";

    listItem.appendChild(listSpan);
    depositList.appendChild(listItem);
  } else {
    console.log("Please enter a numeric value");
  }

  currentAccount.balance += Number(depositAmountInput.value);
  profileBalance.textContent = `${currentAccount.balance}$`;

  localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
});

makeWithdrawBtn.addEventListener("click", () => {
  let withdrawArr = currentAccount.withdraws;

  withdrawArr.push(withdrawAmountInput.value);
  withdrawContainer.classList.toggle("display-none");
  if (Number(withdrawAmountInput.value)) {
    let listItem = document.createElement("li");
    listItem.classList.add("withdraws-li");
    listItem.innerText = `-${withdrawAmountInput.value}$`;

    let listSpan = document.createElement("span");
    listSpan.classList.add("withdraw-arrow");
    listSpan.innerText = "⌄";

    listItem.appendChild(listSpan);
    withdrawList.appendChild(listItem);
  } else {
    console.log("Please enter a numeric value");
  }

  currentAccount.balance -= withdrawAmountInput.value;
  profileBalance.textContent = `${currentAccount.balance}$`;
  localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
});

makeTransactionBtn.addEventListener("click", () => {
  let transactionAmount = transactionAmountInput.value;
  let recipientName = recipient.value;

  class Recipient {
    constructor(name, amount) {
      this.name = name;
      this.amount = amount;
    }
  }

  if (Number(transactionAmount) && typeof recipientName === "string") {
    let transactionArr = currentAccount.transactions;
    transactionArr.push(new Recipient(recipientName, transactionAmount));

    let listItem = document.createElement("li");
    listItem.classList.add("transactions-li");
    listItem.innerText = `${transactionAmount}$`;

    let listSpan = document.createElement("span");
    listSpan.classList.add("transaction-to");
    listSpan.innerText = `${recipientName}`;

    listItem.appendChild(listSpan);
    transactionList.appendChild(listItem);

    transactionContainer.classList.toggle("display-none");
    localStorage.setItem("currentAccount", JSON.stringify(currentAccount));
  } else {
    console.log("Wrong input values");
  }

  currentAccount.balance -= Number(transactionAmount);
  profileBalance.textContent = `${currentAccount.balance}$`;
});
