const r = React;
const rd = ReactDOM;
const e = r.createElement;

document.addEventListener("DOMContentLoaded", () => {
  rd.render(e(App), document.getElementById("flux-cart"));
});

function App() {
  return e("div", {}, "testing");
}
