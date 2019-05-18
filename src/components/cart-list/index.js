import React, { Component } from "react";
import CartItem from '../cart-item';
import CartResult from '../cart-result';
import {connect} from 'react-redux';

class CartList extends Component {

    renderCartItem = () => {
        return this.props.cartList.map((cartItem,index) => {
            return  <CartItem cartItem={cartItem} key={index}/>
        })
    }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Hình Ảnh</th>
            <th>Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Tổng Cộng</th>
            <th />
          </tr>
        </thead>
        <tbody>
         {this.renderCartItem()}
          <CartResult/>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cartList : state.cartList
    }
}
export default connect(mapStateToProps,null) (CartList);
