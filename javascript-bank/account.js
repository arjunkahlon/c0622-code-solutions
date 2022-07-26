/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newTransaction = new Transaction('deposit', amount);
    this.transactions.push(newTransaction);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (withdraw.amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;

  if (this.transactions.length === 0) {
    return 0;
  }
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }

  return balance;
};
