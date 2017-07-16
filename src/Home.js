import React, { Component } from 'react';
import $ from 'jquery';
import Rlslsd from './Rlslsd';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
//import {HashRouter, Route, Link} from 'react-router-dom'//导入的方式跟之前有点变化

class Home extends Component {
    iesJump() {
        window.location.href = 'http://47.93.28.215/vr/product/ies/';
    }
    devJump() {
        window.location.href = 'http://developer.wizsch.com/';
    }
    componentDidMount() {
        if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
            window.location.href = 'http://47.93.28.215/vr/mobile/home/';
        }
        // 屏幕宽度
        var winWidth = $(window).width();
        // 屏幕高度
        var winHeight = $(window).height();
        // 鼠标左右边界, 左右两边空出100
        var mouseXBorder = 100;
        // 鼠标上下边界, 上下两边空出170
        var mouseYBorder = 170;
        // 北斗七星第一个移动系数，整体上下移动比例0.06，系数相对于屏幕的宽高
        var starBoxXCoef = 0.06;
        var starBoxYCoef = 0.06;
        // 其他六个星星的随机系数，0.5-1.5之间,系数相对于北斗七星第一个
        var star2Rand = Math.random() + 0.5;
        var star3Rand = Math.random() + 0.5;
        var star4Rand = Math.random() + 0.5;
        var star5Rand = Math.random() + 0.5;
        var star6Rand = Math.random() + 0.5;
        // 灯光的移动系数，左右0.05，上下0.1,系数相对于屏幕的宽高
        var lightXCoef = 0.05;
        var lightYCoef = 0.1;
        // 背景星星的缩小系数
        var starCoef = 0.08;
        $(document).ready(function(){
            let heroContentHeight = $('.hero').height() - $('.hero-nav').height();
            $('.hero-content').css("height", heroContentHeight);
            document.title = 'VRschool|Home';
        });
        $(window).resize(function() {
            let heroContentHeight = $('.hero').height() - $('.hero-nav').height();
            $('.hero-content').css("height", heroContentHeight);
        });
        $(".hero-content").mousemove(function (e) {
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0; 
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0; 
            var star1Left = (xx - winWidth) * starBoxXCoef;
            var star1Top = (yy - winHeight) * starBoxYCoef;
            var star2Left = star2Rand * star1Left + 70;
            var star2Top = star2Rand * star1Top + 60;
            var star3Left = star3Rand * star1Left + 140;
            var star3Top = star3Rand * star1Top + 70;
            var star4Left = star4Rand * star1Left + 200;
            var star4Top = star4Rand * star1Top + 46;
            var star5Left = star5Rand * star1Left + 260;
            var star5Top = star5Rand * star1Top;
            var star6Left = star6Rand * star1Left + 263;
            var star6Top = star6Rand * star1Top + 85;
            var lightLeft = -100 + (winWidth - xx) * lightXCoef;
            var lightTop = (winHeight - yy) * lightYCoef;
            var coefX = 1 - starCoef * Math.abs(xx - winWidth / 2) / (winWidth / 2 - mouseXBorder);
            var coefY = 1 - starCoef * Math.abs(yy - winHeight / 2) / (winHeight / 2 - mouseYBorder);
            var coef = coefY;
            if (coefY < coef) {
                coef = coefY;
            }
            var starPerc = parseInt(100 * coef) + '%';

            if (xx < winWidth - mouseXBorder && xx > mouseXBorder && yy < winHeight - mouseYBorder && yy > mouseYBorder) {
                $('.vr-star1').css('left', star1Left);
                $('.vr-star1').css('top', star1Top);
                $('.vr-star2').css('left', star2Left);
                $('.vr-star2').css('top', star2Top);
                $('.vr-star3').css('left', star3Left);
                $('.vr-star3').css('top', star3Top);
                $('.vr-star4').css('left', star4Left);
                $('.vr-star4').css('top', star4Top);
                $('.vr-star5').css('left', star5Left);
                $('.vr-star5').css('top', star5Top);
                $('.vr-star6').css('left', star6Left);
                $('.vr-star6').css('top', star6Top);
                $('.vr-light').css('margin-left', lightLeft);
                $('.vr-light').css('margin-top', lightTop);
                $('.vr-star-bg').css('width', starPerc);
                $('.vr-star-bg').css('height', starPerc);
            } else {
                $('.vr-star-box').css('left', 0);
                $('.vr-star-box').css('top', 0);
                $('.vr-light').css('margin-left', 0);
                $('.vr-light').css('margin-top', 0);
                $('.vr-star-bg').css('width', '100%');
                $('.vr-star-bg').css('height', '100%');
            }
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
          <img src="http://download.duckr.cn/vrschcool/home/home_light.png" alt="" className="vr-light" />
          <img src="http://download.duckr.cn/vrschcool/home/home_star_bg.png" alt="" className="vr-star-bg" />
          <section className="vr-star-box">
            <img src="http://download.duckr.cn/vrschcool/home/star1.png" alt="" className="vr-star1" />
            <img src="http://download.duckr.cn/vrschcool/home/star2.png" alt="" className="vr-star2" />
            <img src="http://download.duckr.cn/vrschcool/home/star3.png" alt="" className="vr-star3" />
            <img src="http://download.duckr.cn/vrschcool/home/star4.png" alt="" className="vr-star4" />
            <img src="http://download.duckr.cn/vrschcool/home/star5.png" alt="" className="vr-star5" />
            <img src="http://download.duckr.cn/vrschcool/home/star6.png" alt="" className="vr-star6" />
          </section>
          <h1>让教育变得更简单、更快乐、更高效</h1>
          <h2>Make education easier ，happier and more Efficient</h2>
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
        <h2>遍布全国课堂，师生共创<br />精彩的体验式教学。</h2>
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
            <p className="honor-text">共建北京科技大学虚拟现实实验室</p >
          </section>
          <section className="honor-right-box honor-box">
            <img src="http://download.duckr.cn/vrschool/home/icon3.png" alt="" className="honor-logo"/>
            <p className="honor-text">中关村高新技术企业</p >
            <p className="honor-text">中国教育学会教育管理分会理事单位</p >
            <p className="honor-text">CEO杨威被聘为中关村虚拟现实空间<br/>(Strong VR)导师</p >
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
