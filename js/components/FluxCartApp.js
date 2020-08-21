const r = require("react");

const FluxCart = require("./FluxCart");
const FluxProduct = require("./FluxProduct");

const e = r.createElement;

function FluxCartApp() {
  // get state
  const [product, setProduct] = r.useState("product");
  const [selected, setSelected] = r.useState("selected");
  const [items, setItems] = r.useState("items");
  const [count, setCount] = r.useState("count");
  const [total, setTotal] = r.useState("total");
  const [visible, setVisible] = r.useState("visible");

  r.useEffect(() => {
    // addChangeListener (product, cart)
    return () => {
      // removeChangeListener (product, cart)
    };
  }, []);

  return e(
    "div",
    { className: "flux-cart-app" },
    e(FluxCart, { items, count, total, visible }),
    e(FluxProduct, { product, items, selected })
  );
}

module.exports = FluxCartApp;
