import * as types from './../constant/ActionTypes'

export const addToCart = (product,quantity) => {
   return {
      type: types.ADD_TO_CART,
      product,
      quantity
   }
}

export const increToCart = (product,quantity) => {
   return {
      type: types.INCRE_TO_CART,
      product,
      quantity
   }
}

export const decreToCart = (product,quantity) => {
   return {
      type: types.DECRE_TO_CART,
      product,
      quantity
   }
}

export const removeToCart = (product) => {
   return {
      type: types.REMOVE_TO_CART,
      product
   }
}

export const changeMessage = (message) => {
   return {
      type: types.CHANGE_MESSAGE,
      message
   }
}