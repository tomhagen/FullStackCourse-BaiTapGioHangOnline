import React from "react";
import "./App.css";
import ItemList from './components/item-list';
import Message from './components/message';
import CartList from './components/cart-list';

function App() {
  return (
    <div className="container">
      <h1 className="display-4 text-center">Mua Hàng Online</h1>
      <ItemList/>
      <div className="row">
        <Message/>
      </div>
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="display-4">Giỏ Hàng</h1>
        </div>
        <div className="col-12">
          <CartList/>
        </div>
      </div>
    </div>
  );
}

export default App;
