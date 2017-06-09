import React, { Component } from 'react';
import './nav.css';
var $ = require('jquery');

class NewsNav extends Component {
    jumpNews() {
		var strFullPath=window.document.location.href;  
        var strPath=window.document.location.pathname;  
        var pos=strFullPath.indexOf(strPath);  
        var prePath=strFullPath.substring(0,pos);  
        var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);  
        var basePath = prePath;
        window.location.href = basePath + '/news/index.html';
    }
	jumpIndustry() {
		var strFullPath=window.document.location.href;  
        var strPath=window.document.location.pathname;  
        var pos=strFullPath.indexOf(strPath);  
        var prePath=strFullPath.substring(0,pos);  
        var postPath=strPath.substring(0,strPath.substr(1).indexOf('/')+1);  
        var basePath = prePath;
        window.location.href = basePath + '/industry/index.html';
	}
    render() {
        return (
          <section className="nav">
            <section className="news-subnav">
              <a className="subnav-item" id="subnav-item1">
                <div onClick={this.jumpNews} className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_news_1_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">微视酷新闻</p>
              </a>
              <a className="subnav-item" id="subnav-item2">
                <div onClick={this.jumpIndustry} className="mask"></div>
                <img src="http://download.duckr.cn/vrschool/nav/subnav_news_2_icon.png" alt="" className="subnav-icon"/>
                <p className="subnav-title">行业资讯</p>
              </a>
            </section>
          </section>
        );
    }
}

export default NewsNav;
