import React, { Component } from 'react';
import './product.css';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class ProductIes extends Component {
    componentDidMount() {
        $('.ies-top-text-box').css('right', '13%');
        $(".ies-top-text-box").css('opacity', '1');
    }
  render() {
    return (
      <section className="product">
        <HomeHeader />
        <img className="ies-top-slider-bg" src="http://download.duckr.cn/vrschool/product/ies/ies_bg.png" />
        <section className="ies-top-text-box">
            <p className="ies-top-text-title">
            IES沉浸式教育系统
            </p>
            <p className="ies-top-text1">
            IEC：云端技术支持，实现云端课程库，学生行为数据分析，
            教学环境远程传递
            </p>
            <p className="ies-top-text2">
            IEM：可远程教学，无需固定教室，30分钟即可完成安装使用
            </p>
            <p className="ies-top-text2">
            IEL：海量VR课程，全国一流师资制作，老师统一控制VR课
            程节奏，讲解、提问、监控、考试、统计、反馈课堂全搞定
            </p>
            <section className="ies-login-school">
                <a href="http://123.57.53.5/vr/login/">学校登录</a>
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
        <img className="ies-bottom-pic" src="http://download.duckr.cn/vrschool/product/ies/ies_bottom2.jpeg" />
        <HomeFooter />
      </section>
    );
  }
}

export default ProductIes;
