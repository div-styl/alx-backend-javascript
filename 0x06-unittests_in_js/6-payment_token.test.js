const assert = require('assert');

const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI function", () => {
  it("validate the usage of the Utils func", () => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        getPaymentTokenFromAPI(true)
          .then((res) => {
            assert.deepStrictEqual(res, { data: 'Successful response from the API' })
          });
        done();
      });
  });
});
