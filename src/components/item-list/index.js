import React, { Component } from "react";
import Item from '../item';
import {connect} from 'react-redux';

class ItemList extends Component {

    renderItemList = () => {
        return this.props.itemList.map((item,index) => {
            return <Item item={item} key={index}/>
        })
    }
  render() {
    return (
      <div className="row mt-4">

        {this.renderItemList()}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        itemList : state.itemList
    }
}
export default connect(mapStateToProps,null) (ItemList);
