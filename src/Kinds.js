import React, { Component } from 'react';
import $ from 'jquery';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';

class Kinds extends Component {
    componentDidMount() {
        $(document).ready(function(){
          let heroContentHeight = $('.page1').height() - $('.hero-nav').height();
          $('.hero-content').css("height", heroContentHeight);
        });
        $(window).resize(function() {
          let heroContentHeight = $('.page1').height() - $('.hero-nav').height();
          $('.hero-content').css("height", heroContentHeight);
        });

        /*$(document).ready(() => {
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
        });*/
    }
    render() {
        return (
            <section className="main">
                <section className="page page1">
                    <HomeHeader /> 
                    <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/1_bg_1.png" />
                    <section className="kinds-pad-box">
                        <section className="kinds-pad-arrow-box">
                            <img src="http://download.duckr.cn/vrschool/product/vr/icon_L_s.png" className="kinds-pad-left-arrow" />
                            <img src="http://download.duckr.cn/vrschool/product/vr/icon_R_s.png" className="kinds-pad-right-arrow" />
                        </section>
                    </section>
                </section>
                <section className="page page2">
                    <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/2_bg.png" />
                </section>
                <section className="page page3">
                    <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/3_bg.png" />
                </section>
                <section className="page page4">
                    <section className="home-bottom-split-box">
                        <HomeFooter />
                    </section>
                </section>
            </section>
        );
    }
}

export default Kinds;
