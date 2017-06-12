import React, { Component } from 'react';
import './home.css';
import $ from 'jquery';
import Rlslsd from './Rlslsd';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
//import {HashRouter, Route, Link} from 'react-router-dom'//导入的方式跟之前有点变化

class Home extends Component {
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

    function bindArrow(section) {
          $(section + ' .down-arrow').mouseover(function(){
            $(section + " .down-arrow2").css("top","102px");
          });
          $(section + ' .down-arrow').mouseout(function(){
            $(section + " .down-arrow2").css("top","0");
          });
        }
        $('.main').onepage_scroll({
          sectionContainer: '.page',
          loop: false,
          afterMove: function(index){
            if (document.body.clientWidth > 1366) {
              switch(index){
                case 1:
                  break;
                case 2:
                  $('.ies > h1').css('opacity', '1')
                  $('.ies > h1').css('margin-top', '100px')
                  $('.ies > .mark').css('opacity', '1')
                  $('.ies > .mark').css('left', '10%')
                  $('.ies-btn').css('opacity', '1')
                  $('.ies-btn').css('right', '18.2%')
                  $('.ies-device').css('opacity', '1')
                  $('.ies-device').css('bottom', '0')
                  $('.ies .down-arrow2').css('top', '0')
                  bindArrow('.ies');
                  break;
                case 3:
                  $('.china > h1').css('opacity', '1')
                  $('.china > h1').css('top', '15%')
                  $('.china > h2').css('opacity', '1')
                  $('.china > h2').css('top', '23%')
                  $('.border').css('opacity', '1')
                  $('.border').css('left', '20%')
                  $('.child').css('opacity', '1')
                  $('.child').css('left', '15%')
                  $('.child').css('bottom', '18%')
                  $('.china .down-arrow2').css('top', '0')
                  bindArrow('.china');

                  // function cityAppear(i) {
                  //   if(i < 19) {
                  //     setTimeout(function(){
                  //       $('.city' + i).css('opacity', '1')
                  //       console.log(i + '???')
                  //     },100 * i)
                  //   }else if(18 < i <= 24) {
                  //     setTimeout(function(){
                  //       $('.city' + i).css('opacity', '1')
                  //       $('.city-name' + i).css('opacity', '1')
                  //       console.log(i + '???  name')
                  //     },100 * i)
                  //   }
                  // }
                  // for (var i = 1; i <= 24; i++) {
                  //   cityAppear(i);
                  // }
                  var i = 0
                  function cityAppear() {
                    i++;
                    if(i < 19) {
                      setTimeout(function(){
                        $('.city' + i).css('opacity', '1')
                        console.log(i + '???')
                        return cityAppear()
                      },30)
                    }else if(18 < i <= 24) {
                      setTimeout(function(){
                        $('.city' + i).css('opacity', '1')
                        $('.city-name' + i).css('opacity', '1')
                        console.log(i + '???  name')
                        return cityAppear()
                      },30)
                    }

                  }
                  cityAppear()
                  break;
                case 4:
                  $('.honor-box').css('opacity', '1')
                  $('.ies-img-2').css('top', '-140px')
                  $('.honor .down-arrow2').css('top', '0')
                  bindArrow('.honor');
                  break;
              }
            } else {
              switch(index){
                case 1:
                  break;
                case 2:
                  $('.ies > h1').css('opacity', '1')
                  $('.ies > h1').css('margin-top', '100px')
                  $('.ies > .mark').css('opacity', '1')
                  $('.ies > .mark').css('left', '10%')
                  $('.ies-btn').css('opacity', '1')
                  $('.ies-btn').css('right', '17%')
                  $('.ies-device').css('opacity', '1')
                  $('.ies-device').css('bottom', '0')
                  $('.ies .down-arrow2').css('top', '0')
                  bindArrow('.ies');
                  break;
                case 3:
                  $('.china > h1').css('opacity', '1')
                  $('.china > h1').css('top', '100px')
                  $('.china > h2').css('opacity', '1')
                  $('.china > h2').css('top', '160px')
                  $('.border').css('opacity', '1')
                  $('.border').css('left', '20%')
                  $('.child').css('opacity', '1')
                  $('.child').css('left', '15%')
                  $('.child').css('bottom', '18%')
                  $('.china .down-arrow2').css('top', '0')
                  bindArrow('.china');

                  // function cityAppear(i) {
                  //   if(i < 19) {
                  //     setTimeout(function(){
                  //       $('.city' + i).css('opacity', '1')
                  //       console.log(i + '???')
                  //     },100 * i)
                  //   }else if(18 < i <= 24) {
                  //     setTimeout(function(){
                  //       $('.city' + i).css('opacity', '1')
                  //       $('.city-name' + i).css('opacity', '1')
                  //       console.log(i + '???  name')
                  //     },100 * i)
                  //   }
                  // }
                  // for (var i = 1; i <= 24; i++) {
                  //   cityAppear(i);
                  // }
                  var i = 0
                  function cityAppear() {
                    i++;
                    if(i < 19) {
                      setTimeout(function(){
                        $('.city' + i).css('opacity', '1')
                        console.log(i + '???')
                        return cityAppear()
                      },30)
                    }else if(18 < i <= 24) {
                      setTimeout(function(){
                        $('.city' + i).css('opacity', '1')
                        $('.city-name' + i).css('opacity', '1')
                        console.log(i + '???  name')
                        return cityAppear()
                      },30)
                    }

                  }
                  cityAppear()
                  break;
                case 4:
                  $('.honor-box').css('opacity', '1')
                  $('.ies-img-2').css('top', '-17%')
                  $('.honor .down-arrow2').css('top', '0')
                  bindArrow('.honor');
                  break;
              }
            }
          }
        });
  }
  render() {
    return (
    <section className="main">
      <section className="page hero">
        <HomeHeader /> 
        <section className="hero-content">
          <img src="http://download.duckr.cn/vrschool/home/vr_glass.png" alt="" className="vr-glass" />
          <h1>让教育变得更简单、更快乐、更高效</h1>
          <h2>Make education easier ，happier and more effient</h2>
        </section>
        <div className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="page ies">
        <div className="mark"></div>
        <h1>中国首套整整能上课的VR教学系统</h1>
        <div className="ies-btn know-ies">
          了解更多IES
          <span className="join"></span>
        </div>
        <div className="ies-btn join-develop">
          进入开发者平台
          <span className="join"></span>
        </div>
        <img src="http://download.duckr.cn/vrschool/home/ies_vr.png" alt="" className="ies-device" />
        <div className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
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
        <img src="http://download.duckr.cn/vrschool/home/P3_image1.png" alt="" className="child" />
        <img src="http://download.duckr.cn/vrschool/home/P3_image2.png" alt="" className="border" />
        <div className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>
      <section className="page honor">
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
        <div className="down-arrow">
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow1" />
          <img src="http://download.duckr.cn/vrschool/home/down_arrow.png" alt="" className="down-arrow2" />
        </div>
      </section>

      <section className="page page5">
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
