function Account() {
  this.balance = 0
  this.history = []
}

Account.prototype.credit = function(amount) {
  this.balance += amount
  this.history.unshift({
    amount,
    balance: this.balance,
    date: new Date()
  })
}

Account.prototype.debit = function(amount) {
  if (amount > this.balance) throw new Error('Cannot debit more than balance')
  this.balance -= amount
  this.history.unshift({
    amount: -amount,
    balance: this.balance,
    date: new Date()
  })
}
Account.prototype.transfer = function(amount, accountTo) {
  this.debit(amount)
  accountTo.credit(amount)
}

Account.prototype.getHistory = function() {
return this.history

}

module.exports = Account
