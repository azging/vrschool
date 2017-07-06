import React, { Component } from 'react';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class Content extends Component {
    componentDidMount() {
        $(document).ready(function(){
            document.title = 'VRschool|Content Details';
        });
    }
  render() {
    return (
      <section className="home">
        <HomeHeader data="3" />
        <section className="content-container-box">
            <section className="content-image1-box">
                <section className="content-image1-left-box">
                    <p className="title">桥的形状和结构</p>
                    <p className="content">本课程利用VR技术展现了四种不同形态的桥，分别是上承式拱桥、下承式拱桥、悬索桥、斜拉桥。各桥边设置不同观测点，便于学生多角度观察。</p> 
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
                    <p className="content">基于学生学情，很多学生无法感知北斗七星的三维空间概念，本课程借由VR帮助学生建构立体感、空间感。</p> 
                </section>
            </section>
            <section className="content-image1-box">
                <section className="content-image1-left-box">
                    <p className="title">花、果实和种子</p>
                    <p className="content">通过虚拟场景操作有效规避学生实验的安全性，在游戏的同时激发学生的探究意识和科学精神。</p> 
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
