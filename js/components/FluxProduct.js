const r = require("react");

const e = r.createElement;

function FluxProduct() {
  return e(
    "div",
    { className: "flux-product" },
    e("img", { src: "/" }),
    e(
      "div",
      { className: "flux-product-detail" },
      e("h1", { className: "name" }, "name"),
      e("p", { className: "description" }, "description"),
      e("p", { className: "price" }, "Price: "),
      e("select", {}, e("option", {}, "type")),
      e("button", {}, "Add To Cart or Sold Out")
    )
  );
}

module.exports = FluxProduct;
