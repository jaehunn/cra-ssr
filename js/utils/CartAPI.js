const Actions = require("../actions/FluxCartActions");

module.exports = {
  getProductData: function () {
    const data = JSON.parse(localStorage.getItem("product"));

    Actions.receiveProduct(data);
  },
};
