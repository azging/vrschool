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
            <h1 className="news-title">Vive生态圈大会在深举行，VR教育再成热点！</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/news2/image1.jpeg"/>
              <p>3月27-28日，Vive生态圈大会在深圳举行。大会旨在进一步探讨虚拟现实技术再教育领域的应用，深化VR教育生态建设。活动现场，来自全国各地的VR行业翘楚分享了Vive在虚拟现实教育领域的最新解决方案，同时展示如何通过虚拟现实技术实现有效教学和实训。</p>
              <img src="http://download.duckr.cn/vrschool/details/news2/image2.jpeg"/>
              <p>VR是提高教育质量非常好的方式，每个教育工作者都有责任和义务去推广VR教育，用上最新的技术、最棒的教育内容，带给我们的下一代。——Vive中国区总裁, HTC  汪丛青</p>
              <img src="http://download.duckr.cn/vrschool/details/news2/image3.jpeg"/>
              <p>想像力的表达与形成，在教育中是至关重要的事情。而VR的可贵之处，在于能够透过前所未有的方式帮我们打造信息与环境。
                                                                                 ——VR之父  Dr. Tom Furness</p>
              <img src="http://download.duckr.cn/vrschool/details/news2/image4.jpeg"/>
              <img src="http://download.duckr.cn/vrschool/details/news2/image5.jpeg"/>
              <p>VR教育内容，重点在于作出能真正让老师在课堂上运用的产品。VR学习可获得“有目的的直接经验”，能让学习更简单、更快乐、效率更高。不只是发现知识，甚至未来能创造知识。我们希望能用一个小小教室，让学生体验大千世界！
                                                                                           ——微视酷科技CEO  杨威</p>
              <p>VR教学能让学生进入学习兴奋状态</p>
              <p>正如Dr. Tom Furness 所说，“以往的学习方式，需要我们运用空间思维在脑子中费力想像一个世界，而VR能直接把我们放入那个世界中，这就是VR所带来的沉浸感”。沉浸式VR系统让教育成为虚拟现实行业中最吸引人的地方。</p>
              <img src="http://download.duckr.cn/vrschool/details/news2/image6.jpeg"/>
              <p>微视酷CEO杨威现场演讲——让学生体验大千世界</p>
              <p>微视酷作为中国教育VR技术领跑者，已经在全国数十个中小学落地了微视酷VR课堂，成为了VR教育行业的领头羊。</p>
              <img src="http://download.duckr.cn/vrschool/details/news2/image7.jpeg"/>
              <p>教育改革的推进需要创新科技的加入，从传统教育方式向新型方法的转变过程中，VR技术势必要成为重要影响因子。从微视酷过去一年与各地学校合作的经验来看，在实际教学操作中，VR教育能够解决学生注意力不集中、学习效率低下和学习兴趣不高等问题，还能帮助学校推进教学设备更新换代。因此，微视酷的VR体验课堂受到了广大师生的热烈欢迎，也正是源于此，我们才有底气说：VR教育大有可为。</p>
              <p>大会现场，微视酷还向参会同行展示了一堂“语文课”，“老师”通过一台平板电脑轻松掌控教学节奏，“学生”佩戴Vive设备后，参观被八国联军烧毁前的圆明园，借助虚拟现实技术“穿越”百年，体验身临其境之感。</p>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Details;
