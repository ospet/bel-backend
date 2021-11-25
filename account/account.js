function Account() {
  this.balance = 0
}

Account.prototype.credit = function(amount) {
  this.balance += amount
}

Account.prototype.debit = function(amount) {
  if (amount > this.balance) throw new Error('Cannot debit more than balance')
  this.balance -= amount
}
Account.prototype.transfer = function(amount, accountTo) {
  this.debit(amount)
  accountTo.credit(amount)
}

module.exports = Account
