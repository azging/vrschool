import React, { Component } from 'react';
import './details.css';
var $ = require('jquery');
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';

class Details extends Component {
  render() {
    return (
      <section class="detail">
        <HomeHeader />
        <section className="top-bg">
          <img src="http://download.duckr.cn/vrschool/details/slider1.png" className="top-image"/>
        </section>
        <section className="detail-box">
          <section className="nav-box">
            <div className="detail-nav">
              <p>新闻动态 / 微视酷新闻 / <span className="current-nav">新闻详情</span></p>
            </div>
            <div className="detail-time">
              <p>2016-12-30</p>
            </div>
          </section>
          <section className="content-box">
            <h1 className="news-title">Vive生态圈大会在深举行，VR教育再成热点！</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/news3/image1.jpeg"/>
              <p>5月9日，微视酷科技走进北京朝阳区润丰小学，给全体教师带去VR体验课堂，并同时开展教育研讨会。</p>
              <p>会议围绕学科核心素养、科学研究、工程实践及思维能力等内容展开，润丰小学的全体骨干老师到场参会，原史家胡同小学校长卓立作了“关于小学科学教学中如何发展学生的科学思维，学校引入先进技术的必要性”等方面的演讲。</p>
              <p>为了让与会老师更好的体验虚拟现实技术给教育带来的改变，微视酷研究员为与会教师分享了虚拟现实教育发展的现状，介绍了微视酷科技最新的产品内容及课程。</p>
              <img src="http://download.duckr.cn/vrschool/details/news3/image2.jpeg"/>
              <p>同时，微视酷还在会场搭建了HTC VIVE体验平台，并为与会老师进行了VR教学演示，各位老师们对微视酷产品以及VR课堂表达了极大的兴趣与关注，很多第一次体验VR的老师们也略显兴奋，在虚拟环境中“观摩”了微视酷自主开发的教学内容。</p>
              <img src="http://download.duckr.cn/vrschool/details/news3/image3.jpeg"/>
              <p>未来教育到底会是什么模样？虽然当然没有人能给出确切答案，但正是这种不确定性给了微视酷思考、变革的空间。在实践过程中，虚拟现实技术让很多只能想象的知识变成“可触摸”的现实，VR为未来教育描绘了更多的图景。</p>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Details;
