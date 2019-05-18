import React, { Component } from "react";
import {connect} from 'react-redux';
class CartResult extends Component {
  render() {
    return (
      <tr>
        <td />
        <td />
        <td />
        <td style={{ fontSize: 30 }} className="font-weight-bold">
          Tổng Tiền
        </td>
        <td style={{ fontSize: 30 }} className="font-weight-bold">
          {
            (this.props.gioHang.reduce((tongtien,item,index)=>{
            return tongtien += item.quantity * item.price;
          },0)).toLocaleString()}
        </td>
        <td>
          <button style={{ fontSize: 30 }} className="btn btn-info">
            Thanh Toán
          </button>
        </td>
      </tr>
    );
  }
}

const getStoreGioHang = (state) =>{
  return {
    gioHang: state.cartList
  }
}

export default connect(getStoreGioHang,null) (CartResult);
