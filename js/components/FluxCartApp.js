const r = require("react");

const FluxCart = require("./FluxCart");
const FluxProduct = require("./FluxProduct");

const e = r.createElement;

function FluxCartApp() {
  return e("div", { className: "flux-cart-app" }, e(FluxCart), e(FluxProduct));
}

module.exports = FluxCartApp;
