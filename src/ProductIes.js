import React, { Component } from 'react';
import './product.css';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class ProductIes extends Component {
    componentDidMount() {
        $('.ies-top-text-box').css('right', '13%');
        $(".ies-top-text-box").css('opacity', '1');
        $(document).ready(function(){
            document.title = 'VRschool|IES';
        });
    }
  render() {
    return (
      <section className="product">
        <HomeHeader />
        <img className="ies-top-slider-bg" src="http://download.duckr.cn/vrschool/product/ies/ies_bg1.jpg" />
        <section className="ies-top-text-box">
            <p className="ies-top-text-title">
            IES沉浸式教育平台系统
            </p>
            <p className="ies-top-text1">
            IEC：沉浸式教育云。云计算技术，实现课程管理、学校管理和云端大数据管理和分析。
            </p>
            <p className="ies-top-text2">
             IEM：沉浸式教育管理平台。专业完备的教育管理功能，实现课堂教学管理、课堂教学互动、数据收集和教学效果反馈。
            </p>
            <p className="ies-top-text2">
             IEM：沉浸式教育管理平台。专业完备的教育管理功能，实现课堂教学管理、课堂教学互动、数据收集和教学效果反馈。
            </p>
            <section className="ies-login-school">
                <a href="http://47.93.28.215/vr/login/">学校登录</a>
            </section>
        </section>
        <section className="ies-pic-box">
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies1.jpg" />
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies2.jpg" />
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies3.jpg" />
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies4.jpg" />
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies5.jpg" />
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies6.jpg" />
            <img className="ies-pic" src="http://download.duckr.cn/vrschool/product/ies/ies7.jpg" />
        </section>
        <img className="ies-bottom-pic" src="http://download.duckr.cn/vrschool/product/ies/ies_bottom3.jpg" />
        <HomeFooter />
      </section>
    );
  }
}

export default ProductIes;
