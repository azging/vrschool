import React, { Component } from 'react';
import './home.css';
import $ from 'jquery';
import Rlslsd from './Rlslsd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    (function () {
      var target = document.querySelector(".target");
      var links = document.querySelectorAll(".tab");

      function mouseenterFunc() {
        if (!this.classList.contains("active")) {
          for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains("active")) {
              links[i].classList.remove("active");
            }
            links[i].style.opacity = "1";
          }

          this.classList.add("active");
          this.style.opacity = "1";

          var width = this.getBoundingClientRect().width;
          var height = this.getBoundingClientRect().height;
          var left = this.getBoundingClientRect().left + window.pageXOffset;
          var top = this.getBoundingClientRect().top + window.pageYOffset;

          target.style.width = width + "px";
          target.style.height = height + "px";
          target.style.left = left + "px";
          target.style.top = top + "px";
          target.style.borderColor = '#f08300';
          target.style.transform = "none";
        }
      }

      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
          return e.preventDefault();
        });
        links[i].addEventListener("mouseenter", mouseenterFunc);
      }

      function resizeFunc() {
        var active = document.querySelector(".mynav li.active");

        if (active) {
          var left = active.getBoundingClientRect().left + window.pageXOffset;
          var top = active.getBoundingClientRect().top + window.pageYOffset;

          target.style.left = left + "px";
          target.style.top = top + "px";
        }
      }

      window.addEventListener("resize", resizeFunc);
    })();

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
      $('.vr-glass').css('opacity', '1')
      $(".vr-glass").css('margin-top', '160px');
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
      <section className="page hero">
        <header>
            <nav className="hero-nav mynav">
              <img src="static/image/topLogo.png" alt="" className="logo" />
                <div className="tab tab1">首页</div>
                <div className="tab">产品</div>
                <div className="tab">解决方案</div>
                <div className="tab">应用</div>
                <div className="tab">新闻动态</div>
                <div className="tab">联系我们</div>
              <div className="for-school"><a href="./school/for-school.html">学校登陆</a></div>
              <span className="target"></span>
            </nav>
            
        </header>
        <section className="hero-content">
          <img src="static/image/vr_glass.png" alt="" className="vr-glass" />
          <h1>让教育变得更简单、更快乐、更高效</h1>
          <h2>Make education easier ，happier and more effient</h2>
        </section>
        <div className="down-arrow">
          <img src="static/image/down_arrow.png" alt="" className="down-arrow1" />
          <img src="static/image/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="page ies">
        <div className="mark"></div>
        <h1>中国首套整整能上课的VR教学系统</h1>
        <div className="ies-btn know-ies">
          了解更多IES
          <span className="join">></span>
        </div>
        <div className="ies-btn join-develop">
          进入开发者平台
          <span className="join">></span>
        </div>
        <img src="static/image/ies_vr.png" alt="" className="ies-device" />
        <div className="down-arrow">
          <img src="static/image/down_arrow.png" alt="" className="down-arrow1" />
          <img src="static/image/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="page china">
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
        <h2>遍布全国课堂，师生共创体验式教学的精彩！</h2>
        <img src="static/image/P3_image1.png" alt="" className="child" />
        <img src="static/image/P3_image2.png" alt="" className="border" />
        <div className="down-arrow">
          <img src="static/image/down_arrow.png" alt="" className="down-arrow1" />
          <img src="static/image/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="page honor">
        <section className="honor-content">
          <section className="honor-left-box honor-box">
            <img src="static/image/icon1.png" alt="" className="honor-logo"/>
            <p className="honor-text">承接中国教育学会“十三五”国家课题</p >
            <p className="honor-subtext">《VR沉浸式教学技术辅助学校体验课程建设与教<br/>学改革的研究》</p >
            <p className="honor-text">承接中央电教馆国家级课题</p >
            <p className="honor-subtext">《VR技术支持下以学习者为中心的教学案例研究》</p >
            <p className="honor-text">VR CHINA JAM最佳创意奖</p >
          </section>
          <section className="honor-center-box honor-box">
            <img src="static/image/icon2.png" alt="" className="honor-logo"/>
            <p className="honor-text">中国教育装备行业协会会员</p >
            <p className="honor-text">中国可视化虚拟现实战略产业联盟<br/>成员单位</p >
            <p className="honor-text">北京科技大学虚拟现实实验室</p >
          </section>
          <section className="honor-right-box honor-box">
            <img src="static/image/icon3.png" alt="" className="honor-logo"/>
            <p className="honor-text">中关村高新技术企业</p >
            <p className="honor-text">中国教育学会教育管理分会理事单位</p >
            <p className="honor-text">CEO杨威被聘为中关村虚拟现实空间<br/>(STRONGVR)导师</p >
          </section>
        </section>
        <div className="down-arrow">
          <img src="static/image/down_arrow.png" alt="" className="down-arrow1" />
          <img src="static/image/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>

      <section className="page page5">
        <img src="static/image/P4_image.png" alt="" className="ies-img-2"/>
        <footer className="footer">
          <section className="footer-content">
            <section className="footer-left-box">
              <section className="qrcode-box">
                <img src="static/image/qrcode.png" alt="" className="qrcode-image"/>
                <p className="qrcode-hint">关注微视酷微信订阅号</p >
              </section>
              <section className="contact-box">
                <img src="static/image/logo5.png" alt="" className="contact-logo"/>
                <p className="contact-info">地址：北京市海淀区上地创业中路32号3-301</p >
                <p className="contact-info">电话：400-0860581<br/>010-87366561</p >
                <p className="contact-info">邮箱：INFO@WIZSCH.COM</p >
              </section>
            </section>
            <section className="footer-right-box">
              <section className="about-box">
                <h5 className="item-title">关于微视酷</h5>
                <a href="" className="item-link">关于我们</a >
                <a href="" className="item-link">合作伙伴</a >
                <a href="" className="item-link">加入我们</a >
              </section>
              <section className="support-box">
                <h5 className="item-title">支持与下载</h5>
                <a href="" className="item-link">售后服务</a >
                <a href="" className="item-link">技术支持</a >
                <a href="" className="item-link">资料下载</a >
              </section>
              <section className="entry-box">
                <h5 className="item-title">入口</h5>
                <a href="" className="item-link">开发者</a >
                <a href="" className="item-link">IES登陆</a >
              </section>
              <section className="news-box">
                <h5 className="item-title">媒体资讯</h5>
                <a href="" className="item-link">媒体介绍</a >
                <a href="" className="item-link">技术支持</a >
                <a href="" className="item-link">行业资讯</a >
              </section>
            </section>
          </section>
          <section className="footer-copyright">
            <p className="copyright-content">COPYRIGHT @ 2017 微视酷</p >
          </section>
        </footer>
      </section>
    </section>

    );
  }
}

export default Home;
