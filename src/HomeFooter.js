import React, { Component } from 'react';
import $ from 'jquery';

class HomeFooter extends Component {
    componentDidMount() {
        var winWidth = $(window).width();
        var width = (winWidth - 1470) / 2;
        if (width < 10) {
            width = 10;
        }
        var left = (winWidth - 1920) / 2 - width;
        $("#home-footer").css("padding-left", width);
        $(".footer-copyright > .copyright-content").css("margin-left", left);
    }
    render() {
        return (
            <footer className="footer" id="home-footer">
              <section className="footer-content">
                <section className="footer-left-box">
                  <section className="footer-box">
                    <img src="http://download.duckr.cn/vrschool/footer/logo5.png" alt="" className="contact-logo"/>
                    <p className="contact-info">地址：北京市海淀区上地创业中路32号3-301</p >
                    <p className="contact-info">电话：400-0860581<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;010-87366561</p >
                    <p className="contact-info">邮箱：INFO@WIZSCH.COM</p >
                  </section>
                </section>
                <section className="footer-right-box">
                  <section className="about-box">
                    <h5 className="item-title">关于微视酷</h5>
                    <a href="" className="item-link">关于我们</a >
                    <a href="" className="item-link">合作伙伴</a >
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
                    <a href="" className="item-link">公司新闻</a >
                    <a href="" className="item-link">行业资讯</a >
                  </section>
                </section>
                <section className="qrcode-box">
                    <img src="http://download.duckr.cn/vrschool/footer/qrcode.png" alt="" className="qrcode-image"/>
                    <p className="qrcode-hint">关注微视酷微信订阅号</p >
                  </section>
              </section>
              <section className="footer-copyright">
                <p className="copyright-content">COPYRIGHT @ 2017 微视酷</p >
              </section>
            </footer>
        );
    }
}

export default HomeFooter;
