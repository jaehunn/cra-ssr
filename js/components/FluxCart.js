const r = require("react");

const e = r.createElement;

function FluxCart({ items, count, total, visible }) {
  return e(
    "div",
    { className: `flux-cart ${this.props.visible && "active"}` },
    e(
      "div",
      { className: "mini-cart" },
      e("button", { className: "close-cart" }, " "),
      e(
        "ul",
        {},
        e(
          "li",
          {},
          e("h1", { className: "name" }, items[0].name),
          e("p", { className: "type" }, "type x quantity"),
          e("p", { className: "price" }, "price x quantity"),
          e("button", { className: "remove-item" }, "Remove")
        )
      ),
      e("span", { className: "total" }, "total")
    ),
    e("button", { className: "view-cart" }, "View Cart")
  );
}

module.exports = FluxCart;
