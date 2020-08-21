const r = require("react");

const FluxCart = require("./FluxCart");
const FluxProduct = require("./FluxProduct");

const e = r.createElement;

// store get
const getCartState = () => {
  return {
    product:
    selectedProduct:
    cartItems: 
    cartCount:
    cartTotal:
    cartVisible:
  }
}

function FluxCartApp() {
  const [state, setState] = r.useState(getCartState());

  r.useEffect(() => {
    // addChangeListener (product, cart)
    return () => {
      // removeChangeListener (product, cart)
    };
  }, []);

  return e("div", { className: "flux-cart-app" }, e(FluxCart), e(FluxProduct));
}

module.exports = FluxCartApp;
