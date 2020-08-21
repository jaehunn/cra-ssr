const AppDispatcher = require("../dispatcher/AppDispatcher");
const EventEmitter = require("events").EventEmitter;
const ActionTypes = require("../constants/FluxCartConstants");
const _ = require("lodash");

const _products = {};
const _visible = false;

// set (private)
function add() {}

function setCartVisible() {}

function removeItem() {}

// get
const CartStore = _.extend({}, EventEmitter.prototype, {
  getItems: function () {
    return _products;
  },

  getCount: function () {
    return Object.keys(_products).length;
  },

  getTotal: function () {
    let total = 0;
    for (product in _products) {
      if (_products.hasOwnProperty(product)) {
        const { price, quantity } = _products[product];

        total += price * quantity;
      }
    }
  },

  getVisible() {
    return _visible;
  },

  // default event
});

// register(action) => set
AppDispatcher.register(function ({ action }) {
  switch (action.actionType) {
    case ActionTypes.CART_ADD:
    case ActionTypes.CART_VISIBLE:
    case ActionTypes.CART_REMOVE:
    default:
      return true;
  }

  //
  return true;
});
