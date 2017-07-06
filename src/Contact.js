import React, { Component } from 'react';
import './contact.css';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class Contact extends Component {
    componentDidMount() {
        $(document).ready(function(){
            document.title = 'VRschool|Contact';
        });
    }
  render() {
    return (
      <section class="contact">
        <HomeHeader data="5" />
        <section className="top-bg">
          <img src="http://download.duckr.cn/vrschool/contact/contact-banner.png" className="top-image"/>
        </section>
        <section className="contact-box">
          <h1 className="contact-title">联系我们</h1>
          <section className="content-box">
            <section className="contact-info-box">
              <img src="http://download.duckr.cn/vrschool/footer/logo5.png" alt="" className="logo"/>
              <p className="contact-info-subtitle">地址：</p>
              <p className="contact-info-detail">北京市海淀区上地创业中路32号3-301</p>
              <p className="contact-info-subtitle">电话：</p>
              <p className="contact-info-detail">400-0860581</p>
              <p className="contact-info-detail">010-87366561</p>
              <p className="contact-info-subtitle">邮箱：</p>
              <p className="contact-info-detail">INFO@WIZSCH.COM</p>
            </section>
            <section className="comment-box">
              <form action="">
                <section className="left-box">
                  <label for="name">您的姓名</label>
                  <input type="text" className="left-input" id="name" name="name" />
                  <label for="name">电话</label>
                  <input type="text" className="left-input" id="phone" name="phone" />
                  <label for="name">标题</label>
                  <input type="text" className="left-input" id="title" name="title" />
                </section>
                <section className="right-box">
                  <label for="name">留言*</label>
                  <textarea name="message" id="message" className="right-textarea"></textarea>
                  <button type="submit" className="submit-button">提交</button>
                </section>
              </form>
              <section className="success-box">
                <img src="http://download.duckr.cn/vrschool/contact/icon_success.png" alt="" className="success-logo"/>
                <p className="success-hint">已提交成功，我们会尽快联系您！</p>
              </section>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Contact;
