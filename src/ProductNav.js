import React, { Component } from 'react';
import './nav.css';
var $ = require('jquery');

class ProductNav extends Component {
    hideNav() {
        $("#product-subnav").hide();
    }
    showKind1() {
        var baseUrl = 'http://123.57.53.5/vr/';
        var kindsUrl1 = baseUrl + 'product/kinds/index.html#1';
        window.location.href=kindsUrl1;
        window.location.reload();
    }
    showKind2() {
        var baseUrl = 'http://123.57.53.5/vr/';
        var kindsUrl2 = baseUrl + 'product/kinds/index.html#2';
        window.location.href=kindsUrl2;
        window.location.reload();
    }
    showKind3() {
        var baseUrl = 'http://123.57.53.5/vr/';
        var kindsUrl3 = baseUrl + 'product/kinds/index.html#3';
        window.location.href=kindsUrl3;
        window.location.reload();
    }
    render() {
        var baseUrl = 'http://123.57.53.5/vr/';
        var iesUrl = baseUrl + 'product/ies/';
        return (
          <section className="nav">
            <section id="product-subnav" onMouseLeave={this.hideNav} className="product-subnav">
              <a href={iesUrl} className="subnav-item" id="subnav-item1">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_product_1_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">IES系统</p>
              </a>
              <a onClick={this.showKind1} className="subnav-item" id="subnav-item2">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_product_2_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">VR课堂</p>
              </a>
              <a onClick={this.showKind2} className="subnav-item" id="subnav-item3">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_product_3_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">VR互动教室</p>
              </a>
              <a onClick={this.showKind3} className="subnav-item" id="subnav-item4">
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
