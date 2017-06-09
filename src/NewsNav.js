import React, { Component } from 'react';
import './nav.css';
var $ = require('jquery');

class NewsNav extends Component {
  render() {
    return (
      <section className="nav">
        <section className="news-subnav">
          <a href="" className="subnav-item" id="subnav-item1">
            <div className="mask"></div>
            <img src="static/image/subnav_news_1_icon.png" alt="" className="subnav-icon"/>
            <p className="subnav-title">微视酷新闻</p>
          </a>
          <a href="" className="subnav-item" id="subnav-item2">
            <div className="mask"></div>
            <img src="static/image/subnav_news_2_icon.png" alt="" className="subnav-icon"/>
            <p className="subnav-title">行业资讯</p>
          </a>
        </section>
      </section>
    );
  }
}

export default NewsNav;
