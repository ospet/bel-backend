const expect = require('chai').expect
const Account = require('./account')

describe('Account', () => {
  it('new account has balance 0', () => {
    let account = new Account()
    expect(account.balance).to.equal(0) 
  })

  it('credit amount', () => {
    let account = new Account()
    account.credit(3)
    expect(account.balance).to.equal(3) 
  })
  it('debit amount', () => {
    let account = new Account()
    account.balance = 9
    account.debit(4)
    expect(account.balance).to.equal(5) 
  })
  it('cannot debit more than balance' , () => {
    let account = new Account()
    account.balance = 3
    expect(() => account.debit(5)).to.throw('Cannot debit more than balance')

  })

  it('transfer' , () => {
    let accountFrom = new Account()
    accountFrom.balance = 25
    let accountTo = new Account()
    accountTo.balance = 12
    accountFrom.transfer(4 , accountTo)
    expect(accountFrom.balance).to.equal(21)
    expect(accountTo.balance).to.equal(16)
  })

  it('cannot transfer more than sender balance' , () => {
    let accountFrom = new Account()
    accountFrom.balance = 2
    let accountTo = new Account()
    accountTo.balance = 12
    expect(() => accountFrom.transfer(4 , accountTo)).to.throw('Cannot debit more than balance')
  })    
})

