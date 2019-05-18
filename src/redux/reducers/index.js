
import {combineReducers} from 'redux';
import itemReducer from './item-reducer';
import CartReducer from './cart-reducer';

const rootReducer =  combineReducers({
    itemList : itemReducer,
    cartList : CartReducer
})
export default rootReducer