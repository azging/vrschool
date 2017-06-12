import React, { Component } from 'react';
import './nav.css';
var $ = require('jquery');

class ProductNav extends Component {
  render() {
    var baseUrl = 'http://123.57.53.5/vr/';
    var iesUrl = baseUrl + 'product/ies/';
    var kindsUrl = baseUrl + 'product/kinds/';
    return (
      <section className="nav">
        <section className="product-subnav">
          <a href={iesUrl} className="subnav-item" id="subnav-item1">
            <div className="mask"></div>
            <img src="http://download.duckr.cn/vrschool/nav/subnav_product_1_icon.png" alt="" className="subnav-icon"/>
            <p className="subnav-title">IES系统</p>
          </a>
          <a href={kindsUrl} className="subnav-item" id="subnav-item2">
            <div className="mask"></div>
            <img src="http://download.duckr.cn/vrschool/nav/subnav_product_2_icon.png" alt="" className="subnav-icon"/>
            <p className="subnav-title">VR课堂</p>
          </a>
          <a href={kindsUrl} className="subnav-item" id="subnav-item3">
            <div className="mask"></div>
            <img src="http://download.duckr.cn/vrschool/nav/subnav_product_3_icon.png" alt="" className="subnav-icon"/>
            <p className="subnav-title">VR互动教室</p>
          </a>
          <a href={kindsUrl} className="subnav-item" id="subnav-item4">
            <div className="mask"></div>
            <img src="http://download.duckr.cn/vrschool/nav/subnav_product_4_icon.png" alt="" className="subnav-icon"/>
            <p className="subnav-title">VR实训空间</p>
          </a>
        </section>
      </section>
    );
  }
}

export default ProductNav;
