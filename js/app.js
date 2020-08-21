const r = require("react");
const rd = require("react-dom");

const FluxCartApp = require("./components/FluxCartApp");
const ProductData = require("./ProductData");
const CartAPI = require("./utils/CartAPI");

const e = r.createElement;

document.addEventListener("DOMContentLoaded", () => {
  ProductData.init(); // set
  CartAPI.getProductData(); // get

  rd.render(e(App), document.getElementById("flux-cart"));
});

function App() {
  return e("div", { className: "App" }, e(FluxCartApp));
}
