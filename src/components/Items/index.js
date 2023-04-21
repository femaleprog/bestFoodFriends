//Dependencies
import React, { Component } from 'react';
//Internals
import AllItems from './AllItems';
import './index.css';

class Products extends Component {
  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <img src="https://i.pinimg.com/474x/7d/71/44/7d7144c9dc8dffac22305388169b650e.jpg" />
          <h4>Annoucements</h4>
        </div>
        <AllItems />
      </div>
    );
  }
}

export default Products;
