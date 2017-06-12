import React, { Component } from 'react';
import './product.css';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class Product extends Component {
  render() {
    return (
      <section className="product">
        <HomeHeader />
        <section className="product-index">
          <a href="" className="item" id="item1">
            <h2 className="item-title">IES系统</h2>
            <div className="item-icon"></div>
            <p className="item-link">了解更多→</p>
          </a>
          <a href="" className="item" id="item2">
            <h2 className="item-title">VR课堂</h2>
            <div className="item-icon"></div>
            <p className="item-link">了解更多→</p>
          </a>
          <a href="" className="item" id="item3">
            <h2 className="item-title">VR互动教室</h2>
            <div className="item-icon"></div>
            <p className="item-link">了解更多→</p>
          </a>
          <a href="" className="item" id="item4">
            <h2 className="item-title">VR实训空间</h2>
            <div className="item-icon"></div>
            <p className="item-link">了解更多→</p>
          </a>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Product;
