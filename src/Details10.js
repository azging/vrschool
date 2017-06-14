import React, { Component } from 'react';
import './details.css';
var $ = require('jquery');

class Details extends Component {
  render() {
    return (
      <section class="detail">
        <section className="top-bg">
          <img src="http://download.duckr.cn/vrschool/details/slider1.png" className="top-image"/>
        </section>
        <section className="detail-box">
          <section className="nav-box">
            <div className="detail-nav">
              <p>新闻动态 / 行业资讯 / <span className="current-nav">新闻详情</span></p>
            </div>
            <div className="detail-time">
              <p>2016-12-30</p>
            </div>
          </section>
          <section className="content-box">
            <h1 className="news-title">微软公布华硕的新头显和戴尔的新设计</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/industry2/image1.jpeg"/>
              <p>在今年的台北国际电脑展上，微软透露了更多与之合作的 Windows 混合现实头显，包括华硕的 MR 头显和戴尔的新设计。</p>
              <p>微软今天公布了华硕的一款带有多边形前面板的 MR 头显。微软在他们的博客中说，这款头显设计有符合人体工程学的可调节表带，可以单手调节。并进一步表示华硕正在与他们合作“使用 6 自由度(6 DOF)跟踪的运动控制器，让头显更快速，更强大和更轻便，实现令人难以置信的沉浸式 MR 体验。”</p>
              <p>微软的 6 DOF 运动控制器首次公布是在该公司年度 Build 开发大会上，其基于 MR 头显的由内而外位置跟踪技术配合传感器实现。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry2/image2.jpeg"/>
              <p>戴尔的 MR 头显今年早些时候在 CES 上首次公开亮相，现在似乎有了明显的变化，改进了前面板，上面有陷进去的传感器放置位和黑色的头带内饰。微软表示，这款头显是由同一个团队设计，该团队是 XPS 和 Alienware 高端电脑的创造者。该头显的特点是有一条电缆，可更换的衬垫以及带有翻转功能的光环式头带。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry2/image3.jpeg"/>
              <p>微软已经提供超过 2 万个通用 Windows 应用程序，包括混合现实应用程序和游戏，以及串流 Xbox 游戏 Windows 10 PC 的功能。目前与微软合作的宏碁和惠普已经全面接受其 MR 头显的预订，售价分别为 299 美元和 329 美元，预计今年年末发货。</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;
