import React, { Component } from 'react';
import ProductNav from './ProductNav.js';
import NewsNav from './NewsNav.js';

var $ = require('jquery');

class HomeHeader extends Component {
    jumpTarget(index) {
        var links = document.querySelectorAll(".tab");
        var linkTarget = links[index];

        var target = document.querySelector(".target");
        var width = linkTarget.getBoundingClientRect().width;
        var height = linkTarget.getBoundingClientRect().height;
        var left = linkTarget.getBoundingClientRect().left + window.pageXOffset;
        var top = linkTarget.getBoundingClientRect().top + window.pageYOffset;

        target.style.width = width + "px";
        target.style.height = height + "px";
        target.style.left = left + "px";
        target.style.top = 14 + top + "px";
        target.style.borderColor = '#f08300';
        target.style.transform = "none";
    }
    mouseLeave(index) {
        if (index != this.props.data) {
            this.jumpTarget(this.props.data);
        }
    }
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
            this.jumpTarget(index);    
        }
    }
    jumpHome() {
        window.location.href = 'http://47.93.28.215/vr/';
    }
    jumpProduct() {
        window.location.href = 'http://47.93.28.215/vr/' + 'product/';
    }
    jumpSolution() {
        window.location.href = 'http://47.93.28.215/vr/' + 'total_solution/';
    }
    jumpContent() {
        window.location.href = 'http://47.93.28.215/vr/' + 'content_details/';
    }
    jumpNews() {
        window.location.href = 'http://47.93.28.215/vr/' + 'news/vrschool/';
    }
    jumpContact() {
        window.location.href = 'http://47.93.28.215/vr/' + 'contact_us/';
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
        var winWidth = $(window).width();
        var docWidth = $(document).width();
        var bodyWidth = $(document.body).width();
        var outWidth = $(document.body).outerWidth(false);
        var right = (winWidth - 1053) - 93 - 148;
        if (right < 10) {
            right = 10;
        }
        $(".logo").css("margin-right", right);
        if (this.props.data >=0 && this.props.data <= 5) {
            this.jumpTarget(this.props.data);
        }
    }
    render() {
        var loginUrl = 'http://47.93.28.215/vr/' + 'login/';
        var devUrl = 'http://developer.wizsch.com/';
        return (
            <header>
                <nav className="hero-nav mynav">
                    <img src="http://download.duckr.cn/vrschool/home/topLogo.png" alt="" className="logo" />
                        <div onMouseEnter={this.mouseEnter.bind(this, 0)} onMouseLeave={this.mouseLeave.bind(this, 0)} onClick={this.jumpHome} className="tab">首页</div>
                        <div onMouseEnter={this.mouseEnter.bind(this, 1)} onMouseLeave={this.mouseLeave.bind(this, 1)} onClick={this.jumpProduct} className="tab">产品</div>
                        <div onMouseEnter={this.mouseEnter.bind(this, 2)} onMouseLeave={this.mouseLeave.bind(this, 2)} onClick={this.jumpSolution} className="tab">解决方案</div>
                        <div onMouseEnter={this.mouseEnter.bind(this, 3)} onMouseLeave={this.mouseLeave.bind(this, 3)} onClick={this.jumpContent} className="tab">应用</div>
                        <div onMouseEnter={this.mouseEnter.bind(this, 4)} onMouseLeave={this.mouseLeave.bind(this, 4)} onClick={this.jumpNews} className="tab">新闻动态</div>
                        <div onMouseEnter={this.mouseEnter.bind(this, 5)} onMouseLeave={this.mouseLeave.bind(this, 5)} onClick={this.jumpContact} className="tab" id="contact-us">关于我们</div>
                        <div className="for-school"><a href={loginUrl}>学校登录</a></div>
                        <div className="for-dev"><a href={devUrl}>开发者</a></div>
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
