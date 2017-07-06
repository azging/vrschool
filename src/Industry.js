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

class Industry extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="home">
                <HomeHeader data="4" />
                <img className="news-top-slider-bg" src="http://download.duckr.cn/vrschool/news/Slider2.png" />
                <section className="news-middle-box">
                    <section className="news-middle-content-box">
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner1.png" title="几年后才有真正的虚拟现实？" type="2" href="http://47.93.28.215/vr/news/details/details9/" />
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner2.png" title="微软公布华硕的新头显和戴尔的新设计" type="2" href="http://47.93.28.215/vr/news/details/details10/" />
                    </section>
                </section>
                <section className="news-footer-box1">
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner3.png" title="沉浸的艺术 细数全球四类虚拟现实软件" type="3" href="http://47.93.28.215/vr/news/details/details11/" />
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner4.png" title="虚拟现实(VR)：下一个时代的开启？" type="3" href="http://47.93.28.215/vr/news/details/details12/" />
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner5.png" title="虚拟现实和增强现实 谁才是未来？" type="3" href="http://47.93.28.215/vr/news/details/details13/" />
                </section>
                <section className="news-footer-box2">
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner6.jpg" title="中国的ARVR产业链已经做到世界级" type="3" href="http://47.93.28.215/vr/news/details/details14/" />
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner7.png" title="VR教育：新加坡利用VR宣传道路交通安全" type="3" href="http://47.93.28.215/vr/news/details/details15/" />
                        <PicText data="http://download.duckr.cn/vrschool/industry/banner8.jpg" title="VR虚拟现实技术在教育领域的前景展望" type="3" href="http://47.93.28.215/vr/news/details/details16/" />
                </section>
                <HomeFooter />
            </section>
        );
    }
}

export default Industry;
