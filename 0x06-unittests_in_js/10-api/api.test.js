const { expect } = require("chai")
const request = require("request")



describe('server test', () => {
  it('test the server call', (done) => {
    request.get('http://localhost:7865', (e, res, body) => {
      expect(res.statusCode).to.be.equal(200)
      expect(body).to.equal('Welcome to the payment system')
      done()
    })
  })


  it('test the server cart', (done) => {
    request.get('http://localhost:7865/cart/12', (e, res, body) => {
      expect(res.statusCode).to.be.equal(200)
      expect(body).to.equal('Payment methods for cart 12')
      done()
    })
  })


  it('test the server error 404', (done) => {
    request.get('http://localhost:7865/cart/none', (e, res, body) => {
      expect(res.statusCode).to.be.equal(404)
      done()
    })
  })


  it('test the server payment', (done) => {
    request.get('http://localhost:7865/available_payments', (e, res, body) => {
      expect(res.statusCode).to.be.equal(200)
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      })
      done()
    })
  })


  it('test the server login', (done) => {
    request.get({ url: 'http://localhost:7865/login', json: { "userName": "Ninja" } }, (e, res, body) => {
      expect(res.statusCode).to.be.equal(200)
      expect(body).to.be.equal('Welcome Ninja')
      done()
    })
  })
})
