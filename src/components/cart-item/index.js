import React, { Component } from "react";
import {connect} from 'react-redux';
import { actDeleteCartItem, actUpdateQuantity } from "../../redux/actions/cart";

class CartItem extends Component {


    handleUpdateQuantity = (product,quantity) => {
       
            this.props.onUpdateQuantity(product,quantity)
       
    }

    handleOnDelete = (id) => {
        this.props.onDeleteCartItem(this.props.cartItem.id);
        console.log(this.props.cartItem.id);
    }
  render() {

    let {name,image} = this.props.cartItem
    

    return (
      <tr>
        <td>
          <img
            style={{ width: 200 }}
            src={image}
          />
        </td>
        <td style={{ fontSize: 25 }}>{name}</td>
        <td>{this.props.cartItem.price.toLocaleString()}</td>
        <td>
          {this.props.quantity}
          <div className="btn-group">
            <button className="btn btn-info border-right" onClick={() => this.handleUpdateQuantity(this.props.cartItem,false)}>-</button>
            {this.props.cartItem.quantity}
            <button className="btn btn-info border-left" onClick={() => this.handleUpdateQuantity(this.props.cartItem,true)}>+</button>
          </div>
        </td>
        <td>{(this.props.cartItem.price * this.props.cartItem.quantity).toLocaleString()}</td>
        <td>
          <button className="btn btn-info" onClick={this.handleOnDelete}>x</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCartItem: (id) => {
            dispatch(actDeleteCartItem(id))
        },
        onUpdateQuantity: (product,flag) => {
            dispatch(actUpdateQuantity(product,flag))
        }
    }
}

const mapStateToProps = (state) => {
  return {
    payload : state.itemList
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (CartItem);
