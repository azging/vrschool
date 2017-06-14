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
              <p>新闻动态 / 微视酷新闻 / <span className="current-nav">新闻详情</span></p>
            </div>
            <div className="detail-time">
              <p>2016-12-30</p>
            </div>
          </section>
          <section className="content-box">
            <h1 className="news-title">微视酷VR课堂再现哈市 聚首阳明小学探讨未来教育</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/news7/image1.jpeg"/>
              <p>4月19日下午，哈尔滨市阳明小学举行”VR教育未来学校智慧课堂研讨会”活动，学校师生通过微视酷VR课堂感受了一堂生动别致的体验课。哈尔滨进修学校长康校长，道外区教研员等出席研讨会并作发言。</p>
              <img src="http://download.duckr.cn/vrschool/details/news7/image2.jpeg"/>
              <p>VR技术的运用已经给教育行业带来颠覆性的影响，在虚拟现实浸入式体验下，师生之间的知识传递与接收都发生了巨大变化。虚拟现实帮助学生消减时间与空间造成的认知阻断。</p>
              <img src="http://download.duckr.cn/vrschool/details/news7/image3.jpeg"/>
              <p>作为创新教学成果，微视酷VR课堂不同于传统教学模式，将VR技术引入教学过程，并提供了富有针对性的教学内容，以便学生们对科学原理和实验现象的理解更加透彻。</p>
              <img src="http://download.duckr.cn/vrschool/details/news7/image4.jpeg"/>
              <p>体验课气氛活跃，戴上VR眼镜后，学生们立即沉浸在“触手可及”的虚拟现实世界中，详细的知识点和真实的现场体验感都都使得很多同学们流连忘返。课程结束后，有同学一脸兴奋地说：“很真实很刺激！眼镜里看到的知识点真的就在每个人眼前！”</p>
              <img src="http://download.duckr.cn/vrschool/details/news7/image5.jpeg"/>
              <p>微视酷VR课堂轻便、稳定流畅、清晰度高等特点除了展现真实、互动、情节化的VR特征外，也为“VR+教育”的应用方向提供了更多可能。</p>
              <p>微视酷现场负责人也表示，“微视酷VR课堂系统将继续与更多VR教育类内容厂商合作，为'VR+教育'提供优质服务支持。希望有更多学校关注到VR技术对教学方式的促进与提升，有更多老师和学生能通过微视酷VR课堂的产品受益，有更多课堂能享受到VR带来的创新革命。”</p>
              <img src="http://download.duckr.cn/vrschool/details/news7/image6.jpeg"/>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;
