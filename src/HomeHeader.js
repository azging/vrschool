import React, { Component } from 'react';
import ProductNav from './ProductNav.js';
import NewsNav from './NewsNav.js';

var $ = require('jquery');

class HomeHeader extends Component {
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
                if (this == links[1]) {
                    $("#product-nav").show();
                } else {
                    $("#product-nav").hide();
                }
                if (this == links[4]) {
                    $("#news-nav").show();
                } else {
                    $("#news-nav").hide();
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
                if (this == links[5]) {
                    target.addEventListener("click", jumpContact);
                }
                if (this == links[0]) {
                    target.addEventListener("click", jumpHome);
                }
                if (this == links[1]) {
                    target.addEventListener("click", jumpProduct);
                }
            }
        }
        function jumpContact() {
            window.location.href = 'http://123.57.53.5/vr/contact_us/';
        }
        function jumpHome() {
            window.location.href = 'http://123.57.53.5/vr/';
        }
        function jumpProduct() {
            window.location.href = 'http://123.57.53.5/vr/product/';
        }
        for (var i = 0; i < links.length; i++) {
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
    }
    render() {
        return (
            <header>
                <nav className="hero-nav mynav">
                  <img src="http://download.duckr.cn/vrschool/home/topLogo.png" alt="" className="logo" />
                    <div className="tab tab1">首页</div>
                    <div className="tab">产品</div>
                    <div className="tab">解决方案</div>
                    <div className="tab">应用</div>
                    <div className="tab">新闻动态</div>
                    <div className="tab" id="contact-us">联系我们</div>
                  <div className="for-school"><a href="http://123.57.53.5/vr/login/">学校登录</a></div>
                  <span className="target"></span>
                </nav>
                <section className="home-product-nav" id="product-nav">
                    <ProductNav />
                </section>
                <section className="home-product-nav" id="news-nav">
                    <NewsNav />
                </section>
            </header>
        );
    }
}

export default HomeHeader;
