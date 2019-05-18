import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  UPDATE_QUANTITY
} from "../constants/cart";

const initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const indexCartItem = state.findIndex(
        item => item.id === action.payload.item.id
      );
      if (indexCartItem !== -1) {
        state[indexCartItem].quantity += action.payload.quantity;
        console.log(action.payload.quantity);
      } else {
        let item = { ...action.payload.item, quantity: 1 };
        state.push(item);

        console.log(state);
      }

      return [...state];

    case DELETE_CART_ITEM:
      const index = state.findIndex(cartItem => cartItem.id === action.id);
      state.splice(index, 1);
      return [...state];

    case UPDATE_QUANTITY:
      console.log(state, action);
      let stateUpdate = [...state];
      const index1 = stateUpdate.findIndex(
        item => item.id === action.product.id
      );
      if (index1 !== -1) {
        if (action.flag) {
          stateUpdate[index1].quantity += 1;
        } else {
          if (stateUpdate[index1].quantity > 1) {
            stateUpdate[index1].quantity -= 1;
          }
        }
      }
      state = stateUpdate;
      return [...state];
    default:
      return [...state];
  }
};
export default CartReducer;
