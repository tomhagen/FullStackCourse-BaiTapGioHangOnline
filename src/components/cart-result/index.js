import React, { Component } from "react";
import {connect} from 'react-redux';
class CartResult extends Component {


  // Hàm reduce nhận vào 2 tham số: 1. giá trị tổng ( cuối hàm reduce set giá trị tổng = 0, 2. item hiện tại.
  // mỗi lần duyệt qua mảng nó sẽ thực thi 1 lần, hàm reduce trả ra một giá trị
  // hàm toLocaleString để chuyển số thành chuỗi ( vd: 1700 -> 1,700 )
  renderTotal =  () => {
    return (this.props.cartList.reduce((total,item) => {
      return total += item.quantity * item.price
    },0)).toLocaleString()
  }

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
        
       $ {this.renderTotal()}
      
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


const mapStateToProps = (state) =>{
  return {
    cartList: state.cartList
  }
}

export default connect(mapStateToProps,null) (CartResult);
