const AppDispatcher = require("../dispatcher/AppDispatcher");
const ActionTypes = require("../constants/FluxCartConstants");

// create payload -> throw dispatcher
const Actions = {
  receiveProduct: function (data) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.RECEIVE_DATA,
      data,
    });
  },

  selectProduct: function (data) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.SET_SELECTED,
      data,
    });
  },

  //sku: stock keeping unit
  addToCart: function (sku, update) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.CART_ADD,
      sku,
      update,
    });
  },

  removeFromCart: function (sku) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.CART_REMOVE,
      sku,
    });
  },

  updateCartVisible: function (cartVisible) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.CART_VISIBLE,
      cartVisible,
    });
  },
};

module.exports = Actions;
