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
            <h1 className="news-title">济南VR智慧课堂教育研讨会大获成功，引发广泛关注</h1>
            <section className="news-content">
              <p>新学期伊始，微视酷VR课堂便来到美丽的泉城——山东济南，给济南市胜利大街小学5年前6班的学生们带去了“别开生面”的一堂天文课。</p>
              <p>由济南市教育局、济南广播电视台、济南市中区宣传部共同举办，市中区教育局、济南网、无线济南客户端、市中区手机台共同承办的“未来学校 VR智慧课堂教育教学研讨会”同步举行。并确立胜利大街小学为 “山东省VR智慧课堂示范学校”。</p>
              <img src="http://download.duckr.cn/vrschool/details/news4/image1.jpeg"/>
              <img src="http://download.duckr.cn/vrschool/details/news4/image2.jpeg"/>
              <p>在老师的引导下，学生们戴上VR眼镜后进入太阳系的虚拟空间，了解太阳系的奥秘。伴随着阵阵惊叹，孩子们在微视酷VR课堂营造的沉浸式氛围里遨游太空。</p>
              <p>“VR眼镜实在太酷了，我感觉自己像是外太空的宇航员，轻轻转动头部就可以‘飞’向任何一颗行星！”体验过微视酷设备的学生大呼过瘾。</p>
              <img src="http://download.duckr.cn/vrschool/details/news4/image3.jpeg"/>
              <p>学生们在接受媒体采访时说到，“现在我们有了VR眼镜，在课堂上我们就可以更加生动地有趣地观看行星，这让我感觉非常震撼。”“（通过）VR眼镜，我看到了八大行星，还有月球，有身临其境的感觉。”</p>
              <p>老师也表示，和传统教学方式相比，VR课堂更加生动，能够活跃课堂气氛，帮助学生更好的理解知识，增强学习主动性。“以前的课本也有图片，但图片毕竟是死板的，视频也有，但孩子们没有身临其境的感觉。VR眼镜的代入感特别强，无形中，孩子的积极性就调动起来了。”</p>
              <p>据了解，济南市市中区基于加快落实“人才、产业、科技、文化”四大强区战略，不断探索互联网教育在课堂教学创新应用中的有效模式和方法的宗旨，举行了这场特殊的VR体验之旅。</p>
              <p>VR教学将传统的单向教育转化为认知交互和沉浸式体验模式，学生被带入微观或宏观的虚拟世界中，身临其境地观察、探究，极大激发其兴趣和好奇心，增强学生的学习主动性。</p>
              <img src="http://download.duckr.cn/vrschool/details/news4/image4.jpeg"/>
              <p>胜利大街小学在本次活动中被确立为 “山东省VR智慧课堂示范学校”。该校的王校长表示，在网络等多渠道的刺激下，学生的思维越来越“耐不住寂寞”，传统的教学方式，已经越来越不能适应现代化教学的需要。因此，改进授课方式不仅是提高教学效率的重要手段，而且已经成为留住学生“专注力”的主要途径。</p>
              <img src="http://download.duckr.cn/vrschool/details/news4/image5.jpeg"/>
              <p>作为此次VR体验课的技术提供方——微视酷VR课堂是目前国内唯一能够做到“真正能实现课堂教学的VR课堂”。VR教育在国内刚刚兴起，这种课堂正在成为各地教育部门重点推荐VR教学项目。</p>
              <p>专家表示，教育部在“十三五”规划中已明确提出，VR教育是“发展未来学校和智慧课堂改革”的重要内容，VR教育的发展前景会变得越来越广阔。</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;
