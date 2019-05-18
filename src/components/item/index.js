import React, { Component } from "react";
import {connect} from 'react-redux';
import { actAddToCart } from "../../redux/actions/cart";

class Item extends Component {

    handleAddToCart = () => {
        this.props.onAddToCart(this.props.item)
    }

  render() {

    let {name,desc,image} = this.props.item

    
    return (
      <div className="col-4">
        <div className="card p-2">
          <img
            style={{ height: 280 }}
            src={image}
            className="w-100"
            alt
          />
          <h3 className="text-center text-secondary">{name}</h3>
          <p>
            {desc}
          </p>
          <button className="btn btn-success" onClick={this.handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart : (item) => {
            dispatch(actAddToCart(item,1))
        }
    }
}
export default connect(null,mapDispatchToProps) (Item);
