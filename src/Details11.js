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
            <h1 className="news-title">VR教育：新加坡利用VR宣传道路交通安全</h1>
            <section className="news-content">
              <p>此前已经向大家报道过新加坡在VR教育上的新进展，但除了课堂教学，这个走在创新前沿的国家还把VR带出课堂，延伸到更为重要的课题——道路交通安全。</p>
              <p>下一年，新加坡东海岸公园的道路安全社区公园将增添一系列VR设备，包括360度视频和互动游戏，向公众展示道路场景，宣扬交通安全。</p>
              <p>这套设备在新加坡第五个“公路安全月”的启动仪式上与公众见面，包括分别为儿童、汽车驾驶员和摩托车驾驶员专门打造的VR场景。</p>
              <p>这个项目由交通警察局、新加坡道路安全委员会（SRSC）和资讯通信媒体发展管理局（IMDA）共同发起。</p>
              <p>资讯通信媒体发展管理局的教育创新小组组长Adrian Lim说，在道路安全教育方面，VR能提供一个安全、可控的环境，毕竟“不可能把40个孩子带到路边，告诉他们怎么过马路”。</p>
              <p>交通警察局副局长Devrajan Bala说：“儿童永远是弱势群体。有了VR，孩子们就能更好地理解大型车辆司机盲点等概念。”</p>
              <p>在《感受道路》（Road Sensibility VR）这个场景中，摩托车驾驶员能够练习安全的驾驶技巧；而在《注视马路》（Eyes On The Road）中，观众化身为一名驾驶员，这位驾驶员开车时玩电子设备，随后死于交通事故。</p>
              <p>在VR场景中还有两张全新的海报，警告行人和驾驶员不要在路上使用手机或者其他电子设备。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry3/image1.jpeg"/>
              <p>家庭事务与健康秘书长Amrin Amin说：“我们还需要在校园和乐龄安全区（Silver Zones）以外的地方宣扬交通安全。驾驶员需要知道的不仅仅是限速和遵守交通规则。”</p>
              <p>他说，交通安全教育需要延伸至马路三类弱势群体：摩托车驾驶员、老年路人和儿童。</p>
              <p>道路安全委员会主席Bernard Tay说：“我们还希望孩子们能把在场景中获取的信息带回家，给爸爸妈妈和爷爷奶奶宣扬交通安全。如果实践证明 VR技术 在这方面确实有效，我们未来也会打造针对老年人的内容。”</p>
              <p>去年，新加坡有62名摩托车驾驶员和乘客死于交通事故，超过5000人受伤。包含老年人的交通事故从过去的224宗上升至268宗，造成141人死亡和8277人受伤。</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;
