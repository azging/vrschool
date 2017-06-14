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
            <h1 className="news-title">虚拟现实和增强现实 谁才是未来？</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/industry7/image1.jpeg"/>
              <p>现实世界的更好版本与新的人造虚拟世界，这两种世界你更喜欢哪个？</p>
              <p>它们都是新时代的前沿技术，均涉及笨重的硬件，均吸引了全球科技界最具影响力的一些人的目光。</p>
              <p>然而，增强现实或者虚拟现实的到来，是否会将我们带到全然不同的娱乐、游戏和通讯世界呢？二者之间谁最终会胜出呢？增强现实是在我们看到的现实世界上覆盖上虚拟的3D图像，而虚拟现实则是将我们完全浸入新的世界，你的身体实际所处的房间几乎没有或者完全没有感官输入。</p>
              <p>下面来从数个层面对增强现实和虚拟现实进行比较：</p>
              <p>众说纷纭</p>
              <img src="http://download.duckr.cn/vrschool/details/industry7/image2.jpeg"/>
              <p>对于未来的愿景，二者有时候相互补充，有时候则相互矛盾。下面来看看业界大佬们和相关创业公司的创始人的看法。</p>
              <p>微软HoloLens过去几个月备受关注，但实际上，Magic Leap才是最让业界着迷、最受投资人追捧的增强现实科技。该公司的CEO罗尼·艾伯维兹（Rony Abovitz）并不认为虚拟现实是娱乐和游戏体验的未来，称其很危险。</p>
              <p>在Reddit的Ask Me Anything栏目上，艾伯维兹谈到了虚拟现实和增强现实之间的差异，即虚拟现实头盔将用户浸入人造世界，增强现实则整合来自现实世界的物体和环境。“有一种设备被称为立体3D，我们认为这些对视力大脑系统的输入是不适当的，会引发暂时性或永久性的神经功能缺损。”他说道。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry7/image3.jpeg"/>
              <p>“我们公司的宗旨及我个人的看法是，不要在用户的大脑上‘留下任何的痕迹’。大脑很容易出现神经重塑，毫无疑问的是近眼立体3D系统可能会引发神经功能变化。”</p>
              <p>虚拟现实先知帕尔默·拉基（Palmer Luckey）则没有这种担忧。他表示，如果我们能够使得虚拟现实变得跟现实一样令人满意，一样富有吸引力，那么它将会成为“人类史上最重要的技术之一”。</p>
              <p>豪砸20亿美元买下拉基的虚拟现实公司Oculus的Facebook CEO马克·扎克伯格（Mark Zuckerberg）对于该技术同样非常着迷。“我们涉足虚拟现实，是因为我觉得它是继手机之后的下一个重大计算与通讯平台。”他在7月说道，“我们将能够与任何喜欢的人分享我们的感官和情感体验。”</p>
              <p>而在诸如苹果设计主管乔尼·伊夫（Jony Ive）的一些业内大腕看来，脸部完全“不适合使用可穿戴科技。”</p>
              <p>体验</p>
              <img src="http://download.duckr.cn/vrschool/details/industry7/image4.jpeg"/>
              <p>谷歌眼镜虽然曾引发巨大的关注，但其市场反响不佳。HoloLens让人眼前一亮，但在初期阶段它存在视场问题。</p>
              <p>跟声控技术一样，日常的增强现实有着不少的流行文化灵感，但在它的运行稳定性得到保证，外观做到让人满意之前，没有人会去使用它。在虚拟现实和增强现实之间，增强现实是应该适合在室外、公共场合和在其他人面前使用的那一个。但在硅谷以外，这一切并没有发生。</p>
              <p>至于虚拟现实，它的体验相对而言较为符合我们的预期。该类硬件还不算十全十美——我们当然不会拒绝屏幕更加清晰的Oculus Rift，控制器更符合人体工学的HTC Vive，以及眼部跟踪技术。这一切都将会实现。</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;
