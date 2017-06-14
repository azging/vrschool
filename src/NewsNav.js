import React, { Component } from 'react';
import './nav.css';
var $ = require('jquery');

class NewsNav extends Component {
    hideNav() {
        $("#news-subnav").hide();
        /*var links = document.querySelectorAll(".tab");
        if (links[4].classList.contains("active")) {
            links[4].classList.remove("active");
        }*/
    }
    render() {
        return (
          <section className="nav">
            <section id="news-subnav" onMouseLeave={this.hideNav} className="news-subnav">
              <a href="http://123.57.53.5/vr/news/" className="subnav-item" id="subnav-item1">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_news_1_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">微视酷新闻</p>
              </a>
              <a href="http://123.57.53.5/vr/industry/" className="subnav-item" id="subnav-item2">
                <div className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_news_2_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">行业资讯</p>
              </a>
            </section>
          </section>
        );
    }
}

export default NewsNav;
