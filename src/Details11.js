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
              <p>新闻动态 / 行业资讯 / <span className="current-nav">新闻详情</span></p>
            </div>
            <div className="detail-time">
              <p>2016-12-30</p>
            </div>
          </section>
          <section className="content-box">
            <h1 className="news-title">沉浸的艺术 细数全球四类虚拟现实软件</h1>
            <section className="news-content">
              <p>在2013年的E3大展中Oculus VR携Oculus Rift惊艳亮相。自此，致力于为游戏玩家提供“完全沉浸式体验”的虚拟现实设备逐渐走进了全球发烧友的视野。尽管售价居高不下，但这并未能抵挡玩家们有如潮水般的热情。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image1.jpeg"/>
              <p>沉浸的艺术 细数全球四类虚拟现实软件</p>
              <p>既然有强大的硬件平台先行，后续也一定少不了更具创造力的虚拟现实软件保驾护航。今天我们就为大家盘点全球四大类不得不说的虚拟现实软件，总有你不曾了解的，更有你未曾想到的。</p>
              <p>一、虚拟现实整合软件及平台</p>
              <p>1.Virtools</p>
              <p>Virtools是一款功能丰富的多平台三维游戏引擎，也是最早、被最多人用于制作虚拟现实游戏的开发工具。得益于Virtools的便捷性与开放性，很多初学者往往会选择这一平台作为自己在虚拟现实行业中的启蒙导师。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image2.jpeg"/>
              <p>Virtools设计演示（图片来自dogame）</p>
              <p>没有人知道Virtools在游戏行业中创造了多少奇迹，更没有人预想到Virtools在经过多次易主后一蹶不振。近一年的时间里，Virtools已经停止更新，同时其母公司达索也关闭了在中国的官网。历史的车轮滚滚向前，技术的洪流无法阻挡，因此才有了接下来我们要说的几款整合软件。</p>
              <p>2.Nibiru虚拟现实游戏平台</p>
              <p>Nibiru是由睿悦信息研发、国内首家主打虚拟现实游戏的游戏平台。它采用VR设备物理的方式，直接利用手机的运算和传感器，也就是说，任何一个智能手机，只要装上Nibiru平台同时购买Nibiru授权的梦镜系列眼镜，就可以体验沉浸式游戏了。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image3.jpeg"/>
              <p>Nibiru</p>
              <p>此外，睿悦把内容当做未来发展的重点，目前他们已经同众多移动游戏引擎公司进行合作，有针对性的选择优质游戏进行改造移植，为用户提供内容支持。据悉，Nibiru虚拟现实游戏平台会对Oculus那样一体式的VR眼镜端做打通，随着用户接受程度的深入，也考虑推出价格更高的一体式VR眼镜。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image4.jpeg"/>
              <p>Nibiru</p>
              <p>目前Nibiru旗下已经拥有完美世界的《神鬼幻想》、艾格拉斯《格斗刀魂》、还有《神守卫》、《永恒之剑》以及《异星风暴》、《恶灵杀场》、《shadow gun VR》等大型虚拟现实游戏，并将在进一步开发软件与硬件的同时与国内外知名虚拟现实外设厂商深度合作，其中包括大名鼎鼎的MOGA和LeapMotion（厉动）。</p>
              <p>3.Quest3D</p>
              <p>Quest3D是一个快速高效的实时3D建构工具，相比于传统的图像编辑工具来说，Quest3D的颠覆之处在于能在实时编辑环境中与对象互动。它是一个完整的、稳定的、可视化、图形化的编辑软件。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image5.jpeg"/>
              <p>Quest3D 设计演示（图片来自皮托科技）</p>
              <p>除了千篇一律的图形设计，Quest3D甚至还能处理所有数字内容的网络、数据库、互动逻辑及A.I。它甚至比Virtools还要易学易懂，“所见即所得”是它的理念所在。因此，开发者无须担心Bug和Debug，能够以最高的效率完成自己的美工设计。</p>
              <p>4.三维虚拟现实软件开发平台：WebMax</p>
              <p>WebMax是由上海创图科技有限公司自主研发的、在国内首屈一指的虚拟现实软件。轻便、渲染快是它最大的优点。UI的简洁、流程的简短使之大大减少了虚拟现实游戏开发环节的工作量。</p>
              <p>5.Unity3D</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image6.jpeg"/>
              <p>雨血蜃楼（图片来自官网）</p>
              <p>Unity3D不仅仅是一个开发平台，更是一个独立的游戏引擎。也是目前最专业的、最热门、最具前景的游戏开发工具。它整合了之前所有开发工具的优点，从PC到MAC到Wii甚至再到移动终端，我们都能看见Unity3D的身影。</p>
              <p>其中，最有力的代表作分别为平板电脑端的炉石传说，以及PC端的雨血蜃楼。相信逐渐向虚拟现实游戏转型的Unity3D在今后能为我们带来更多惊喜。</p>
              <p>二、语言类虚拟现实工具</p>
              <p>1.高级着色器利器：HLSL</p>
              <p>高阶着色器语言（High Level Shader Language，简称HLSL）由微软出品，并仅供微软的Direct3D使用。 HLSL是微软抗衡GLSL的产品，同时不能与OpenGL标准兼容。他跟Nvidia的Cg非常相似。 HLSL的主要作用为将一些复杂的图像处理，快速而又有效率地在显卡上完成。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image7.png"/>
              <p>HLSL（图片来自博客园）</p>
              <p>尽管有更多的用户坚守Shader Language，但与组合式或低阶Shader Language相比，HLSL能降低在编写复杂特殊效果时所发生编程错误的机会。</p>
              <p>2.虚拟现实建模语言：VRML</p>
              <p>VRML（Virtual Reality Modeling Language）即虚拟现实建模语言。是一种用于建立真实世界的场景模型或人们虚构的三维世界的场景建模语言，也具有平台无关性。是目前Internet上基于www的三维互动网站制作的主流语言。 </p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image8.jpeg"/>
              <p>VRML建模演示（图片来自3D时代）</p>
              <p>相比于传统的建模语言，VRML更多则被用于建筑设计和模拟场景的还原。随着越来越多的开发者将其应用于虚拟对象交互领域，相信VRML能在今后对虚拟现实设备的发展造成深远的影响。</p>
              <p>3.三维图像标记语言：X3D</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image9.jpeg"/>
              <p>X3D建模演示（图片来自3D时代）</p>
              <p>X3D全称可扩展三维(语言),是由Web3D联盟设计的，VRML的升级版本。相比于同类语言，X3D的最大优势在于能够更随显卡硬件的发展而升级，并支持硬件的渲染。</p>
              <p>与时下最流行的Web3D引擎相比较，X3D的市场占有率并不高。这也在另一方面体现出了X3D的制作工具和开发环境相对落后。因此，尽管技术层面出色，X3D依然难以在同类市场中占据领先地位。</p>
              <p>三、视觉类虚拟现实工具及应用</p>
              <p>1.Flash 3D</p>
              <p>对于这一工具相信大家不会陌生，Flash3D是网页flash播放器播放实时三维画面/三维游戏的程序的总称。与传统3D引擎不同的是，Flash3D基于Flash软件，并有商用和免费/开源和非开源多种版本。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image10.jpeg"/>
              <p>采用Flash 3D设计的页面（图片来自葡萄素材）</p>
              <p>Flash3D的可视化软件有八倍网的flash3d浏览开创版同时显示的面为20000-30000。这个为非实时渲染是的面数，也就是位图显示，位图与面数无关。真正的同时显示万面以上需要等待明年的flash11播放器发布。</p>
              <p>2.暴风魔镜</p>
              <p>暴风魔镜，是暴风影音正式发布的第一款硬件产品。暴风魔镜是一款虚拟现实眼镜，在使用时需要配合暴风影音开发的专属魔镜APP，在手机上实现IMAX效果，普通的电影即可实现影院观影效果。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image11.jpeg"/>
              <p>暴风魔镜（图片来自威腾网）</p>
              <p>3.3D播播</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image12.jpeg"/>
              <p>3D播播（图片来自官网）</p>
              <p>3D播播是一款为手机眼镜量身打造的3D视频播放器。3D播播适配市面上绝大部分手机,以及虚拟现实体验设备。它聚合了大量高清3D内容，支持1080P高清视频，能让用户大视野体验超五星院线的3DIMAX影效。值得一提的是，3D播播还独家支持语音、体感控制，智能使用场景识别，自动判断3D内容格式。</p>
              <p>4.3D中国</p>
              <p>网罗最新最热的3D原创视频、3D短片、立体电影等,免费提供优质的3D视频在线分享服务。玩家可直接在线搜索、观看3D视频,也可自行上传、发布、分享喜欢的3D视频。</p>
              <p>四、触觉类虚拟现实工具</p>
              <p>Haptics</p>
              <p>Haptics的发音是HAP-tiks，是触觉学科的一种，是指通过与计算机进行互动实现虚拟触觉。Haptics一词源于古希腊的“haptein”（捆绑）。通过利用特殊的计算机输入/输出设备（游戏杆，数码手套或者其他设备），用户可以通过与计算机程序交互来获得真实的触觉感受。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image13.jpeg"/>
              <p>Haptics原理演示（图片来自微软亚洲研究院）</p>
              <p>结合虚拟视觉，haptics技术可以用来训练人的手眼协调能力，比如说，军人或者宇航员可以采用这种方式进行训练。另外还可以将这两种技术用在电脑游戏上，比如，你可以和计算机对手在一个虚拟世界里打乒乓球。你既能看到球的运动，还能通过haptic设备，在挥拍击球时感觉到球的撞击。　 </p>
              <p>很多大学都在研究haptics技术，Immersion公司制造一种游戏手柄，可以用在实验室中，或者用来进行模拟游戏。Haptics技术为虚拟现实或三维环境提供了一种新的发展方向。</p>
              <img src="http://download.duckr.cn/vrschool/details/industry5/image14.jpeg"/>
              <p>索尼 梦神虚拟现实设备</p>
              <p>全文总结：</p>
              <p>事实上，国外的虚拟现实技术已有历史。但反观国内，仍有很大一部分用户及开发者尚未关注这一领域。但随着消费级的Oculus Rift终将推出，以及国内廉价级虚拟显示设备的不断涌现，面对着诸多玩家的日夜渴望，我们相信这一行业终有普及的一天。国内虚拟现实的市场表现究竟如何，就让我们一同拭目以待吧！</p>
            </section>
          </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Details;
