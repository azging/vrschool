import React, { Component } from 'react';
import './dev.css'; 
var $ = require('jquery');

class Home extends Component {
  componentDidMount() {
    if($(window).height() > 500 && 1500 > $(window).height()) {
      $("#hero").height($(window).height()); 
    }   
    $(window).scroll(function () {
      $('#deviceBox').css('margin-top', '-95px')  
      $(window).unbind('scroll')
    })

    $(window).resize(function () {
      //改变div的高度
      if($(window).height() > 500 && 1500 > $(window).height()) {
        $("#hero").height($(window).height()); 
      } 
    })

    //   $(document).ready(function() { 

    // $('#hero').prepend('<div class="video-background"></div>');
    // $('.video-background').videobackground({
    //   videoSource: ['static/video/hero.mp4', 'video/mp4'],
    //   controlPosition: '#main',
    //   poster: 'video/big-buck-bunny.jpg',
    //   loadedCallback: function() {
    //     $(this).videobackground('mute');
    //   }
    // })
    // })
  }
  render() {
    return (
      <div className="home">
        <section className="hero" id="hero">
          <img src="http://download.duckr.cn/vrschool/dev/logo.png" alt="" className="logo"/>
          <section className="hero-middle">  
            <h2>微视酷开发者平台</h2>
            <h1>提供专业完备的课堂管控功能</h1>
            <div className="develope">成为开发者</div>
          </section>  
        </section>  
        <section className="device">
          <section id="deviceBox" className="device-box box">
            <div className="row">
              <article className="item item-left-top">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/dev/logo1.png" alt="" className="device-img"/>
              </article>
              <article className="item item-middle">
                <h2 className="device-introduce">支持多款<div className="en">V</div><div className="en">R</div>设备</h2>
                <h3 className="device-introduce-en en">SUPPORT KIONDS OF VR DEVECIS <span>∧</span></h3>
              </article>
              <article className="item item-right-top">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/dev/logo2.png" alt="" className="device-img"/>
              </article>
            </div>
            <div className="row">
              <article className="item item-left-bottom">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/dev/logo3.png" alt="" className="device-img"/>
              </article>
              <article className="item item-right-bottom">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/dev/logo4.png" alt="" className="device-img"/>
              </article>
            </div>
          </section>
        </section>
        <section className="process">
          <section className="process-content">
            <header className="title">
              <img src="http://download.duckr.cn/vrschool/dev/title_line.png" alt=""/>
              <h1>开发流程</h1>
              <h2>DEVELOPMENT PROCESS</h2>
            </header>
            <section className="process-section">
              <article>
                <img src="http://download.duckr.cn/vrschool/dev/register.png" alt="" className="process-img"/>
                <footer className="process-title">注册认证</footer>
              </article>
              <article>
                <img src="http://download.duckr.cn/vrschool/dev/create.png" alt="" className="process-img"/>
                <footer className="process-title">创建课件</footer>
              </article>
              <article>
                <img src="http://download.duckr.cn/vrschool/dev/check.png" alt="" className="process-img"/>
                <footer className="process-title">上传审核</footer>
              </article>
              <article>
                <img src="http://download.duckr.cn/vrschool/dev/release.png" alt="" className="process-img"/>
                <footer className="process-title">课件发布</footer>
              </article>
            </section>
          </section>
        </section>
        <section className="courseware">
          <section className="courseware-content">
            <header className="title">
              <img src="http://download.duckr.cn/vrschool/dev/title_line.png" alt=""/>
              <h1>优秀课件展示列表</h1>
              <h2>GALLERY OF EXCELLENT COURSEWARE</h2>
            </header>
            <section className="courseware-section">
              <article>
                <header className="courseware-title">昼夜交替现象</header>
                <img src="http://download.duckr.cn/vrschool/dev/courseware1.png" alt="昼夜交替现象" className="courseware-img"/>
              </article>
              <article>
                <header className="courseware-title">神奇的莫比乌斯带</header>
                <img src="http://download.duckr.cn/vrschool/dev/courseware2.png" alt="神奇的莫比乌斯带" className="courseware-img"/>
              </article>
              <article>
                <header className="courseware-title">捞铁牛</header>
                <img src="http://download.duckr.cn/vrschool/dev/courseware3.png" alt="捞铁牛" className="courseware-img"/>
              </article>
            </section>
          </section>
        </section>
        <footer className="footer">
          <section className="footer-content">
            <img src="http://download.duckr.cn/vrschool/dev/footer1.png" alt="" className="footer-img"/>
            <section> 
              <h3>中国教育VR软件技术领跑者</h3>
              <h4>北京微视酷科技有限责任公司</h4>
            </section>
          </section>
        </footer>
      </div>
    );
  }
}

export default Home;
