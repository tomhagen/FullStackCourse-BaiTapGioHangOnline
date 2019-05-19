import React, { Component } from "react";
import {connect} from 'react-redux';
import { actDeleteCartItem, actUpdateQuantity } from "../../redux/actions/cart";
import Swal from 'sweetalert2'

class CartItem extends Component {


    handleUpdateQuantity = (product,flag) => {
       
            this.props.onUpdateQuantity(product,flag)
       
    }

    handleOnDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.props.onDeleteCartItem(this.props.cartItem.id);
          console.log(this.props.cartItem.id);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
       
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
        <td> $ {this.props.cartItem.price.toLocaleString()}</td>
        <td>
          <span className="badge badge-success">{this.props.cartItem.quantity}</span>
          
          <div className="btn-group">
            <button className="btn btn-info border-right " onClick={() => this.handleUpdateQuantity(this.props.cartItem,false)}>-</button>
           
            <button className="btn btn-info border-left" onClick={() => this.handleUpdateQuantity(this.props.cartItem,true)}>+</button>
          </div>
        </td>
        <td>$ {(this.props.cartItem.price * this.props.cartItem.quantity).toLocaleString()}</td>
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
