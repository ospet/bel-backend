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
})

