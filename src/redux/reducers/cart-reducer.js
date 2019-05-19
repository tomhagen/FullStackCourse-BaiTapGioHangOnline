import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  UPDATE_QUANTITY
} from "../constants/cart";

const initialState = [];

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const index2 = state.findIndex(
        item => item.id === action.payload.item.id
      );
      if (index2 !== -1) {
        state[index2].quantity += action.payload.quantity;
        console.log(action.payload.quantity);
      }
      // push vào mảng thì gửi kèm quantity {có item và quantity = 1}
      else {
        let item = { ...action.payload.item, quantity: 1 };
        state.push(item);
        console.log(state);
      }

      return [...state];

    case DELETE_CART_ITEM:
      const index = state.findIndex(
        cartItem => cartItem.id === action.payload.id
      );
      state.splice(index, 1);
      return [...state];

    case UPDATE_QUANTITY:
      // tìm vị trí item cần tăng/giảm trong mảng và dựa vào flag để xem muốn tăng hay giảm
      let stateUpdate = [...state];
      const index1 = stateUpdate.findIndex(
        item => item.id === action.payload.item.id
      );
      if (index1 !== -1) {
        if (action.payload.flag) {
          stateUpdate[index1].quantity += 1;
        } else {
          if (stateUpdate[index1].quantity > 1) {
            stateUpdate[index1].quantity -= 1;
          }
        }
      }

      return stateUpdate;
    default:
      return [...state];
  }
};
export default CartReducer;
