import React, { Component } from 'react';
import './details.css';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';

var $ = require('jquery');

class Details extends Component {
  render() {
    return (
      <section class="detail">
        <HomeHeader />
        <section className="top-bg">
          <img src="static/image/slider1.png" className="top-image"/>
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
            <h1 className="news-title">全球首个VR软件视保技术发布 微视酷致力打造健康VR教育</h1>
            <section className="news-content">
              <img src="static/image/news/vrschool1/image1.jpeg"/>
              <p>微视酷科技在第72届中国教装展上,发布全球首个VR软件防蓝光技术，以软件动态防蓝光手段，更好地保护VR教育受众用眼健康。该技术已申报国家专利，作为中国教育VR软件技术领跑者,站在对教育行业发展负责的高度上，微视酷把VR教育引领到一个更加健康无忧的新境界。</p>
              <img src="static/image/news/vrschool1/image2.jpeg"/>
              <img src="static/image/news/vrschool1/image3.jpeg"/>
              <p>5月7日至9日，2017年第72届中国教育装备展示会（下称72届教装展）在福州市隆重举办，中国教育VR软件技术领跑者、中国教育装备行业协会会员——微视酷科技重磅发布2017年领先的VR软件防蓝光技术。</p>
              <img src="static/image/news/vrschool1/image4.jpeg"/>
              <img src="static/image/news/vrschool1/image5.jpeg"/>
              <img src="static/image/news/vrschool1/image6.jpeg"/>
              <img src="static/image/news/vrschool1/image7.jpeg"/>
              <p>什么是蓝光与防蓝光</p>
              <p>自然界的光由各种不同颜色的光谱组成，不同波长在视觉上呈现出的是不同颜色，而蓝光是波长在400~500纳米之间的光，它的波长短，能量高，穿透力强，我们现在普及的电脑、手机、显示屏等，都包含这种短波蓝光。大家接触这些电子产品的时间越来越长，也越来越关注蓝光对人眼的影响。</p>
              <img src="static/image/news/vrschool1/image8.jpeg"/>
              <img src="static/image/news/vrschool1/image9.jpeg"/>
              <img src="static/image/news/vrschool1/image10.jpeg"/>
              <img src="static/image/news/vrschool1/image11.jpeg"/>
              <img src="static/image/news/vrschool1/image12.jpeg"/>
              <p>虽然没有科学理论确切地肯定长期使用数码设备能否对眼睛造成永久性伤害，但专家认为，这会导致眼疲劳和让人感到不适。许多人在长时间使用智能手机或电脑后，都会出现眼睛干涩、视力模糊、视疲劳等症状。在VR系统中，显示屏距离人眼很近，就更需要想办法降低其蓝光对眼睛的影响。</p>
              <p>保护VR教育受众用眼健康</p>
              <p>微视酷此次发布的VR软件防蓝光技术，是通过动态减低VR系统中的蓝光，来减轻蓝光对褪黑素的抑制作用（有利于睡眠），减轻对眼睛黄斑区的影响，减轻视觉模糊不适感等。而且，降低蓝光的技术是动态的、实时的、渐进的，VR画面不仅不会受到任何显示影响，而且稳定柔和；VR用户在加长体验时间的同时，舒适感大大提升。</p>
              <p>微视酷CEO杨威表示，VR技术目前已基本成熟，合理使用对适龄人群基本没有用眼伤害，VR硬件、软件商也都在这方面做出了很好地努力，“作为国内最早专业进军VR教育的微视酷科技，从为孩子负责、为VR教育负责的角度出发，我们非常重视VR教育中的视力保护和用眼健康问题。早在成立之初，微视酷就对国际VR应用做出严谨评估，在完全无法评估影响的低幼龄群体中绝不开展VR教育服务。</p>
              <img src="static/image/news/vrschool1/image13.jpeg"/>
              <img src="static/image/news/vrschool1/image14.jpeg"/>
              <p>微视酷VR课程开发负责人表示，微视酷2016年一年在全国VR课堂开课量中，占比高达97%。杨威强调：“微视酷把学生用眼健康放在最重要的位置，做真正负责任的教育VR，让学校、家长放心，让学生健康舒适上课。”</p>
              <p>在VR迅速普及的大背景下，VR软件防蓝光技术有助于打消大家使用VR设备的顾虑，帮助教育工作者和家长们消除对孩子视力的担忧。该技术的发布，意味着未来所有的VR软件都可以采用微视酷的VR软件防蓝光技术。</p>
              <img src="static/image/news/vrschool1/image15.jpeg"/>
              <img src="static/image/news/vrschool1/image16.jpeg"/>
              <p>微视酷已经在VR 教育行业取得绝对优势的市场占有率，陆续在全国东、南、西、北15个省（市）开设VR课堂，上了近百节VR公开课，开展了中国首节VR公开课、首节室外VR课、首节少数民族VR公开课、首节特殊教育VR公开课等。中国第一个基础教育VR教学示范校——北京培新小学，也在微视酷的帮助下成功挂牌。截至目前，微视酷专业VR课堂课件研发量已超300节课，在国内教育VR课件开发中遥遥领先。</p>
              <p>继2016年微视酷VR教育以一场“月球上的发布会”引爆第71届教装展之后，微视酷从未停止创新脚步。一方面，微视酷在其VR教育专利系统——IES沉浸式教育系统上继续加大投入，研发更多定制VR功能；另一方面，一直致力于研发软件防蓝光技术。</p>
              <img src="static/image/news/vrschool1/image17.jpeg"/>
              <img src="static/image/news/vrschool1/image18.jpeg"/>
              <p>目前，硬件厂商较为普遍的防蓝光技术是在屏幕外加上滤片、滤膜，根据光的波长选择性地阻拦蓝光部分，固定地过滤掉一定比例的蓝光，但这种做法在增加硬件成本同时会影响显示质量。软件防蓝光技术多数还不成熟、不科学，有的因为过滤掉了固定比例的蓝光，造成显示色彩失真、影响显示效果。而微视酷通过不懈努力，终于在这方面有了创造性突破。</p>
              <p>杨威表示，“微视酷以技术助力教育为己任，愿意与其他教育装备商一起合作，共启新VR教育时代，为中国教育‘创新、协调、绿色、开放、共享’的发展理念作出新贡献！”</p>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Details;
