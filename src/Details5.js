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
            <h1 className="news-title">微视酷落地常熟探讨VR教学</h1>
            <section className="news-content">
              <p>为聚焦智慧教育，发展新技术、新思维，推动VR虚拟现实技术在教育领域的创新应用，探讨VR教育，助力新沂智慧课堂改革。3月31日，常熟在继新沂市之后，成为新一个召开VR教学研讨会的城市。活动由常熟市教育装备技术中心主办，各学校分管校长、技教室主任和教育装备技术中心有关人员相聚在常熟市实验小学，共同探讨VR教育。</p>
              <img src="http://download.duckr.cn/vrschool/details/news8/image1.jpeg"/>
              <p>会议主要分为展示课观摩、专家讲座、专题研讨三个环节。在展示课上，微视酷再次给大家带去了《太阳系》课程，我们所熟悉的“IES沉浸式VR教学系统”见到了“新朋友”——常熟市实验小学的孩子们和与会的专家们。</p>
              <img src="http://download.duckr.cn/vrschool/details/news8/image2.jpeg"/>
              <p>看到出现在屏幕上的太阳系，同学们都非常兴奋，往常总是被老师描述的景象终于马上要以直观的画面出现在眼前了。“IES沉浸式VR教学系统”也没让同学们失望，戴上微视酷的VR设备之后，犹如身临其境的感觉和充足的学习资料让同学们目不暇接。</p>
              <p>让同学们没想到的是平常在书本上很难找到地方的数字只要点击屏幕按钮就能全部出现在眼前，更没想到“玩着玩着”还真能把知识顺带手就学了。</p>
              <img src="http://download.duckr.cn/vrschool/details/news8/image3.jpeg"/>
              <p>微视酷作为VR教育软件领跑者，2017年持续发力，在前期广泛而深入地与全国各地的中小学进行合作之后，继续深耕教育领域，为学生们带去新的学习方法，让他们享受更简单、更快乐、更高效的学习方式，向传统方式宣告“学习不一定要局限于书本”；为老师们带去新的教学理念和技术，创造更活跃的课堂气氛，营造更和谐的师生互动方式，打造更加科学有效的教学体系。</p>
              <img src="http://download.duckr.cn/vrschool/details/news8/image4.jpeg"/>
              <p>积极投身教育事业的发展，与广大师生和教育专家共同推进教育事业的进步，享受教育改革带来的成果，是微视酷不断前行的动力和支柱。</p>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Details;
