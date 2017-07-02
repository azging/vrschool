import React, { Component } from 'react';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class PicText extends Component {
    componentDidMount() {
    }

    viewDetail(href) {
        window.location.href = href;
    }

    render() {
        var partClassName = "news-middle-two-content";
        if (3 == this.props.type) {
   	        partClassName = "news-middle-three-content";
        }
        return (
            <section className={partClassName}>
                <img className="news-middle-content-pic" src={this.props.data} onClick={this.viewDetail.bind(this, this.props.href)}/>
                <p className="news-middle-content-title">{this.props.title}</p>
                <section className="news-middle-content-fotter">
                    <span className="news-middle-content-date">2017-04-10    |    </span>
                    <a className="news-middle-content-herf" href={this.props.href}>查看全文→</a>
                </section>
	        </section>
        ); 
    }
}

class Solution extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="home">
                <HomeHeader data="2" />
                <section className="solution-container-box">
                    <img id="solution-bg" src="http://download.duckr.cn/vrschool/solution/Bg_1_1.jpg" /> 
                    <section className="solution-control-opacity">
                    </section>
                    <section id="img-text0" className="solution-text1-box">
                        <p>VR教学教室</p>
                    </section>
                    <section id="img-text1" className="solution-text2-box">
                        <p className="solution-text-title">VR创客教室</p>
                        <p className="solution-text-content1">STEAM创客教育意在提高学生在科学、技术、工程、数学和艺术领域的能力，结合VR技术，创造沉浸式体验，培养学生的认知体验，激发学习兴趣</p>
                        <p className="solution-text-content2">应用领域：创意创想；探寻科学原理等</p>
                    </section>
                    <section id="img-text2" className="solution-text3-box">
                        <p className="solution-text-title">VR科学实验室</p>
                        <p className="solution-text-content1">该方案提供科学实验室的VR形式实验</p>
                        <p className="solution-text-content2">应用领域：物理实验，化学实验，生物实验等</p>
                    </section>
                    <section id="img-text3" className="solution-text4-box">
                        <p className="solution-text-title">VR研学游学</p>
                        <p className="solution-text-content1">借助计算机图像技术以三维建模的形式构建虚拟大空间，并且提供配套的导揽功能。完成大空间的游览展示</p>
                        <p className="solution-text-content2">应用领域：场馆展示；大空间展示；历史遗迹复原等</p>
                    </section>
                    <section id="img-text4" className="solution-text5-box">
                        <p className="solution-text-white-title">VR博物馆</p>
                        <p className="solution-text-white-content1">可以还原真实的博物馆和其中的文物，还可以突破博物馆传统的陈列方式，更多视角距离的提供文物的展示。</p>
                        <p className="solution-text-white-content2">应用领域：古生物还原；文物还原；艺术品展示等。</p>
                    </section>
                    <section id="img-text5" className="solution-text6-box">
                        <p className="solution-text-title">VR安全访问站</p>
                        <p className="solution-text-content1">安全教育通常通过讲解和模拟的方式进行，VR技术创造的沉浸感，可以很大程度上强化安防教育的效果，令培训效果刻骨铭心</p>
                        <p className="solution-text-content2">应用领域：消防安全；交通安全；设备或工具的安全使用等</p>
                    </section>
                    <section id="img-text6" className="solution-text7-box">
                        <p className="solution-text-white-title">VR实操车间</p>
                        <p className="solution-text-white-content1">此方案用于解决特定行业教学内容抽象，形式枯燥，实训设配昂贵或损耗严重，实操危险问题</p>
                        <p className="solution-text-white-content2">应用领域：器械的拆散和组装；器械的结构原理展示等</p>
                    </section>
                    <section id="img-text7" className="solution-text8-box">
                        <p className="solution-text-white-title">VR天下</p>
                        <p className="solution-text-white-content1">采用专业的航拍，全景拍摄技术的拍摄风景，地貌等影像</p>
                        <p className="solution-text-white-content2">应用领域：展览展示，风景地貌展示等</p>
                    </section>
                    <section id="img-text8" className="solution-text9-box">
                        <p className="solution-text-white-title">VR安全访问站</p>
                        <p className="solution-text-white-content1">安全教育通常通过讲解和模拟的方式进行，VR技术创造的沉浸感，可以很大程度上强化安防教育的效果，令培训效果刻骨铭心</p>
                        <p className="solution-text-white-content2">应用领域：消防安全；交通安全；设备或工具的安全使用等</p>
                    </section>
                    
                </section>
                <HomeFooter />
            </section>
        );
    }
}

export default Solution;
