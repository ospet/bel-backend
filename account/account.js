function Account() {
  this.balance = 0
}

Account.prototype.credit = function(amount) {
    this.balance += amount
}

module.exports = Account
