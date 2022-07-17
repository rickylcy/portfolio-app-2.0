import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const addItemQty = (itemID) => {
  return {
    type: actionTypes.ADD_ITEM_QTY,
    payload: {
      id: itemID,
    },
  };
};

export const subtractItemQty = (itemID) => {
  return {
    type: actionTypes.SUBTRACT_ITEM_QTY,
    payload: {
      id: itemID,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
