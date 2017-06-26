import React, { Component } from 'react';
import $ from 'jquery';
import Rlslsd from './Rlslsd';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
//import {HashRouter, Route, Link} from 'react-router-dom'//导入的方式跟之前有点变化

class Home extends Component {
    iesJump() {
        window.location.href = 'http://123.57.53.5/vr/product/ies/';
    }
    devJump() {
        window.location.href = 'http://developer.wizsch.com/';
    }
    componentDidMount() {
        $(document).ready(function(){
            let heroContentHeight = $('.hero').height() - $('.hero-nav').height();
            $('.hero-content').css("height", heroContentHeight);
        });
        $(window).resize(function() {
            let heroContentHeight = $('.hero').height() - $('.hero-nav').height();
            $('.hero-content').css("height", heroContentHeight);
        });

        $(document).ready(() => {
            $('.hero-content > h1').css('opacity', '1')
            $(".hero-content > h1").css('margin-top', '250px');
            $('.hero-content > h2').css('opacity', '1')
            $(".hero-content > h2").css('margin-top', '40px');
            setTimeout(
                  () => { $('.vr-glass').css('opacity', '1'); $(".vr-glass").css('margin-top', '160px'); },
                  800
            );
            
            $('.hero .down-arrow2').css('top', '0')
            $('.hero .down-arrow').mouseover(function(){
              $(".hero .down-arrow2").css("top","102px");
            });
            $('.hero .down-arrow').mouseout(function(){
              $(".hero .down-arrow2").css("top","0");
            });
        });
    }
  render() {
    return (
    <section className="main">
      <section className="section hero">
        <HomeHeader data="0" /> 
        <section className="hero-content">
          <img src="http://download.duckr.cn/vrschool/home/vr_glass.png" alt="" className="vr-glass" />
          <h1>让教育变得更简单、更快乐、更高效</h1>
          <h2>Make education easier ，happier and more effient</h2>
        </section>
        <div id="home-arrow-1" className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="section ies">
        <div className="mark"></div>
        <h1>中国首套真正能上课的VR教学系统</h1>
        <div onClick={this.iesJump} className="ies-btn know-ies">
          了解更多IES
          <span className="join">></span>
        </div>
        <div onClick={this.devJump} className="ies-btn join-develop">
          进入开发者平台
          <span className="join">></span>
        </div>
        <img src="http://download.duckr.cn/vrschool/home/ies_vr.png" alt="" className="ies-device" />
        <div id="home-arrow-2" className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="section china">
        <div className="mark"></div>
        <section className="map">
          <div className="city city1"></div>
          <div className="city city2"></div>
          <div className="city city3"></div>
          <div className="city city4"></div>
          <div className="city city5"></div>
          <div className="city city6"></div>
          <div className="city city7"></div>
          <div className="city city8"></div>
          <div className="city city9"></div>
          <div className="city city10"></div>
          <div className="city city11"></div>
          <div className="city city12"></div>
          <div className="city city13"></div>
          <div className="city city14"></div>
          <div className="city city15"></div>
          <div className="city city16"></div>
          <div className="city city17"></div>
          <div className="city city18"></div>

          <div className="city city19"></div>
          <div className="city city20"></div>
          <div className="city city21"></div>
          <div className="city city22"></div>
          <div className="city city23"></div>
          <div className="city city24"></div>

          <div className="city-name city-name19">北京</div>
          <div className="city-name city-name20">保定</div>
          <div className="city-name city-name21">石家庄</div>
          <div className="city-name city-name22">济南</div>
          <div className="city-name city-name23">温州</div>
          <div className="city-name city-name24">柳州</div>
        </section>
        <h1>微视酷VR教育</h1>
        <h2>遍布全国课堂，师生共创<br />体验式教学的精彩！</h2>
        <img src="http://download.duckr.cn/vrschool/home/girl.png" alt="" className="child" />
        <img src="http://download.duckr.cn/vrschool/home/P3_image2.png" alt="" className="border" />
        <div id="home-arrow-3" className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="section honor">
        <section className="honor-content">
          <section className="honor-left-box honor-box">
            <img src="http://download.duckr.cn/vrschool/home/icon1.png" alt="" className="honor-logo"/>
            <p className="honor-text">承接中国教育学会“十三五”国家课题</p >
            <p className="honor-subtext">《VR沉浸式教学技术辅助学校体验课程建设与教<br/>学改革的研究》</p >
            <p className="honor-text">承接中央电教馆国家级课题</p >
            <p className="honor-subtext">《VR技术支持下以学习者为中心的教学案例研究》</p >
            <p className="honor-text">VR CHINA JAM最佳创意奖</p >
          </section>
          <section className="honor-center-box honor-box">
            <img src="http://download.duckr.cn/vrschool/home/icon2.png" alt="" className="honor-logo"/>
            <p className="honor-text">中国教育装备行业协会会员</p >
            <p className="honor-text">中国可视化虚拟现实战略产业联盟<br/>成员单位</p >
            <p className="honor-text">北京科技大学虚拟现实实验室</p >
          </section>
          <section className="honor-right-box honor-box">
            <img src="http://download.duckr.cn/vrschool/home/icon3.png" alt="" className="honor-logo"/>
            <p className="honor-text">中关村高新技术企业</p >
            <p className="honor-text">中国教育学会教育管理分会理事单位</p >
            <p className="honor-text">CEO杨威被聘为中关村虚拟现实空间<br/>(STRONGVR)导师</p >
          </section>
        </section>
        <div id="home-arrow-4" className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>

      <section className="section page5">
        <img src="http://download.duckr.cn/vrschool/home/P4_image.png" alt="" className="ies-img-2"/>
        <section className="home-bottom-split-box">
            <HomeFooter />
        </section>
      </section>
    </section>

    );
  }
}

export default Home;
