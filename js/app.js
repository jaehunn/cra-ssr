const r = require("react");
const rd = require("react-dom");

const e = r.createElement;

document.addEventListener("DOMContentLoaded", () => {
  rd.render(e(App), document.getElementById("flux-cart"));
});

function App() {
  return e("div", { className: "App" }, "testing");
}
