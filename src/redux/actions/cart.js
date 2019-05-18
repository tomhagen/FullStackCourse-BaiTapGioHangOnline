
import {ADD_TO_CART, DELETE_CART_ITEM, UPDATE_QUANTITY} from '../constants/cart';

export const actAddToCart = (item,quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            item,
            quantity
        }
    }
}

export const actDeleteCartItem = (id) => {
    return {
        type: DELETE_CART_ITEM,
        id
    }
}

export const actUpdateQuantity = (product,flag) => {
    return {
        type: UPDATE_QUANTITY,
        product,flag
    }
}