import React, { Component } from 'react';
import ProductNav from './ProductNav.js';
import NewsNav from './NewsNav.js';

var $ = require('jquery');

class HomeHeader extends Component {
    mouseEnter(index) {
        if (1 == index) {
            $("#product-nav").show();
            $("#product-subnav").show();
        } else {
            $("#product-nav").hide();
        }
        if (4 == index) {
            $("#news-nav").show();
            $("#news-subnav").show();
        } else {
            $("#news-nav").hide();
        }
        var links = document.querySelectorAll(".tab");
        var target = document.querySelector(".target");
        var linkTarget = links[index];
        if (!linkTarget.classList.contains("active")) {
            for (var i = 0; i < links.length; i++) {
                if (links[i].classList.contains("active")) {
                    links[i].classList.remove("active");
                }
                links[i].style.opacity = "1";
            }
            linkTarget.classList.add("active");
            linkTarget.opacity = "1";
            var width = linkTarget.getBoundingClientRect().width;
            var height = linkTarget.getBoundingClientRect().height;
            var left = linkTarget.getBoundingClientRect().left + window.pageXOffset;
            var top = linkTarget.getBoundingClientRect().top + window.pageYOffset;

            target.style.width = width + "px";
            target.style.height = height + "px";
            target.style.left = left + "px";
            target.style.top = top + "px";
            target.style.borderColor = '#f08300';
            target.style.transform = "none";
        }
    }
    jumpHome() {
        window.location.href = process.env.PUBLIC_URL;
    }
    jumpProduct() {
        window.location.href = process.env.PUBLIC_URL + 'product/';
    }
    jumpSolution() {
        window.location.href = process.env.PUBLIC_URL + 'total_solution/';
    }
    jumpContent() {
        window.location.href = process.env.PUBLIC_URL + 'content_details/';
    }
    jumpNews() {
        window.location.href = process.env.PUBLIC_URL + 'news/';
    }
    jumpContact() {
        window.location.href = process.env.PUBLIC_URL + 'contact_us/';
    }
    componentDidMount() {
        (function () {
            var target = document.querySelector(".target");
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
        var loginUrl = process.env.PUBLIC_URL + 'login/';
        var devUrl = 'http://developer.wizsch.com/';
        return (
            <header>
                <nav className="hero-nav mynav">
                    <img src="http://download.duckr.cn/vrschool/home/topLogo.png" alt="" className="logo" />
                    <div onMouseEnter={this.mouseEnter.bind(this, 0)} onClick={this.jumpHome} className="tab tab1">首页</div>
                    <div onMouseEnter={this.mouseEnter.bind(this, 1)} onClick={this.jumpProduct} className="tab">产品</div>
                    <div onMouseEnter={this.mouseEnter.bind(this, 2)} onClick={this.jumpSolution} className="tab">解决方案</div>
                    <div onMouseEnter={this.mouseEnter.bind(this, 3)} onClick={this.jumpContent} className="tab">应用</div>
                    <div onMouseEnter={this.mouseEnter.bind(this, 4)} onClick={this.jumpNews} className="tab">新闻动态</div>
                    <div onMouseEnter={this.mouseEnter.bind(this, 5)} onClick={this.jumpContact} className="tab" id="contact-us">联系我们</div>
                    <div className="for-school"><a href={loginUrl}>学校登录</a></div>
                    <div className="for-school"><a href={devUrl}>开发者</a></div>
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
