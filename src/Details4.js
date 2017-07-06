import React, { Component } from 'react';
import './details.css';
var $ = require('jquery');
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';

class Details extends Component {
    componentDidMount() {
        $(document).ready(function(){
            document.title = 'VRschool|News Details';
        });
    }
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
            <h1 className="news-title">江苏新沂市教育局召开VR智慧课堂研讨会</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/news5/image1.jpeg"/>
              <p>为聚焦新沂市智慧教育，发展新技术、新思维，推动VR虚拟现实技术在教育领域的创新应用，探讨VR教育，助力新沂智慧课堂改革。3月16日，新沂市教育局于新安小学举办VR智慧课堂研讨会。市教育局、商务局、科技局领导，教育局相关科室、城区部分中小学负责人，北京科技大学虚拟现实实验室主任等人员出席会议。</p>
              <img src="http://download.duckr.cn/vrschool/details/news5/image2.jpeg"/>
              <img src="http://download.duckr.cn/vrschool/details/news5/image3.jpeg"/>
              <p>会前，与会人员聆听了微视酷《太阳系》VR公开课。新安小学的同学们通过微视酷自主研发的“IES沉浸式VR教学系统”感受奇妙太空。通过老师的指引，同学们相互配合，在虚拟现实中体验视觉化的宇宙世界，记录太阳系各个行星的天体数据，在愉快的学习氛围中完成知识消化。公开课后，与会人员也亲身感受了VR技术的特别之处。</p>
              <img src="http://download.duckr.cn/vrschool/details/news5/image4.jpeg"/>
              <img src="http://download.duckr.cn/vrschool/details/news5/image5.jpeg"/>
              <p>市教育局领导在座谈会上指出，微视酷VR课堂开发是智慧教育的一项重要内容，对于提升课堂教学效率有帮助。智慧教育是按照市委市政府要求建设智慧新沂的一个重要组成部分，市教育局于2015年购买了智慧教育运行平台，要求每个学校建立网站，诸多学校都在此项工作中投入大量的人力物力，取得了初步的成效。</p>
              <img src="http://download.duckr.cn/vrschool/details/news5/image6.jpeg"/>
              <p>从国家到地区都在强调智慧课堂、在线教育，这将是下一阶段各校研究的一个重点。“人工智能+教育”的模式，是将来教育发展的必然模式，未来10年，人工智能会像水和空气一样在生活中无处不在。市教育局领导强调，今天的VR课堂展示，使我们认识到智慧教育、在线教育、人工智能就在身边，让我们对智慧教育有更深刻的感受。</p>
              <img src="http://download.duckr.cn/vrschool/details/news5/image7.jpeg"/>
              <img src="http://download.duckr.cn/vrschool/details/news5/image8.jpeg"/>
              <p>VR教育已经成为了教学技术发展的一大潮流，VR教学将传统的单向教育转化为认知交互和沉浸式体验模式，学生被带入微观或宏观的虚拟世界中，身临其境地观察、探究，极大激发了兴趣和好奇心，增强学习的主动性。它还将学科的复杂知识和抽象结构形象展现，帮助学生更好地理解知识。</p>
              <p>如何将VR技术与教育完美结合，并落地到现实应用层面，真正为提高国家的素质教育、开启孩子们的未来教育做出贡献，成为了当下教育界和相关企业最为关注的问题。</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Details;
