import React, { Component } from 'react';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class Content extends Component {
  render() {
    return (
      <section className="home">
        <HomeHeader data="3" />
        <section className="content-container-box">
            <section className="content-image1-box">
                <section className="content-image1-left-box">
                    <p className="title">桥的形状和结构</p>
                    <p className="content">本课程利用VR技术展现了四种不同形态的桥，分别是上承式拱桥、下承式拱桥、悬索桥、斜拉桥。同时每个桥边设置了不同的观测点，便于学生多角度的观测。该课适合课程导入或总结时看</p> 
                </section>
                <section className="content-image1-right-box">
                    <img src="http://download.duckr.cn/vrschool/content/image_1.png" />
                </section>
            </section>
            <section className="content-image1-box">
                <section className="content-image1-right-box">
                    <img src="http://download.duckr.cn/vrschool/content/imafe_2.png" />
                </section>
                <section className="content-image1-left-box">
                    <p className="title">在星空中</p>
                    <p className="content">基于学生学情，很多学生没办法感知到这七颗星并不是在一个平面上，而是距离地球有远有近分布的。因此本课让学生在VR中体验在宇宙空间中，从不同角度观察北斗七星，建立三维的北斗七星模型</p> 
                </section>
            </section>
            <section className="content-image1-box">
                <section className="content-image1-left-box">
                    <p className="title">花、果实和种子</p>
                    <p className="content">通过虚拟场景操作也很有效的规避了学生在课堂使用刀具的安全问题。在游戏的同时激发学生探索的欲望，乐于尝试用各种方法进行科学研究</p> 
                </section>
                <section className="content-image1-right-box">
                    <img src="http://download.duckr.cn/vrschool/content/image_3.png" />
                </section>
            </section>
            <section className="content-bottom-line-header">
            </section>
            <section className="content-bottom-line">
            </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Content;
