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
            <h1 className="news-title">微视酷VR课堂亮相北京小学英语信息化课堂教学研讨会</h1>
            <section className="news-content">
              <img src="http://download.duckr.cn/vrschool/details/news6/image1.jpeg"/>
              <p>4月12日，北京小学英语信息化课堂教学研讨会在北京史家胡同小学召开，此次研讨会由北京市基础教育研究教育研究中心主办、北京市东城区史家互动小学承办，各个参赛小学开展信息技术课题的教学比赛。</p>
              <img src="http://download.duckr.cn/vrschool/details/news6/image2.jpeg"/>
              <p>研讨会现场，每位英语老师都拿出了看家本领，其中，清华附小英语老师的VR英语教学尤为引人注目，一下子便激发了孩子们的学习兴趣，大家在老师的指挥下纷纷戴上微视酷VR眼镜，开启首次VR英语教学之旅。</p>
              <p>“实在是与众不同！”孩子们沉醉于VR英语教学的精彩体验中。在老师的指挥下，孩子们戴着微视酷VR眼镜有序地虚拟走进英语情景中，一秒完成“穿越”，身临其境地感受英语国度的风情，“我感觉自己就在英语环境中，这种学习英语的感觉真的很棒!”学生们说到。</p>
              <p>中国式英语教学常常因其封闭性、缺乏互动、忽略口语等缺点而被人诟病，VR+英语模式的出现能够帮助学生进入虚拟的英语学习环境，在具有特色的英语学习氛围中，有助于帮助学生提升感官上的多维度认知，更快地进入学习状态，加快学习速度，强化学习效果。</p>
              <p>“这一次清华附小的VR英语课堂获得了现场评委们一致好评，作为背后的技术支持者我们很是欣慰，希望VR课堂能走进更多的学校，成为教学标配。”微视酷工程师介绍说。</p>
              <p>从哈尔滨到海南，从大西北到大上海，全国数十个城市都落地了微视酷VR教学，这一套VR教学应用经历了过数十所小学的磨合和改进，是国内目前第一个真正能上课的VR，极大改善传统教学模式，激发了学生的学习兴趣。</p>
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
