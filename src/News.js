import React, { Component } from 'react';
import './home.css'; 
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

class News extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="home">
                <HomeHeader />
                <img className="news-top-slider-bg" src="http://download.duckr.cn/vrschool/news/slider-bg.png" />
                <section className="news-middle-box">
                    <section className="news-middle-content-box">
                        <PicText data="http://download.duckr.cn/vrschool/news/banner1.jpg" title="全球首个VR软件视保技术发布-微视酷致力打造健康VR教育" type="2" href="http://www.duckr.cn" />
                        <PicText data="http://download.duckr.cn/vrschool/news/banner2.jpg" title="Vive生态圈大会在深举行，VR教育再成热点！" type="2" href="http://www.baidu.com" />
                    </section>
                </section>
                <section className="news-fotter-box1">
                        <PicText data="http://download.duckr.cn/vrschool/news/banner3.png" title="济南VR智慧课堂教育研讨会大获成功，引发广泛关注" type="3" href="http://www.duckr.cn" />
                        <PicText data="http://download.duckr.cn/vrschool/news/banner4.jpg" title="江苏新沂市教育局召开VR智慧课堂研讨会" type="3" href="http://www.baidu.com" />
                        <PicText data="http://download.duckr.cn/vrschool/news/banner5.jpg" title="微视酷落地常熟探讨VR教学" type="3" href="http://www.duckr.cn" />
                </section>
                <section className="news-fotter-box2">
                        <PicText data="http://download.duckr.cn/vrschool/news/banner6.png" title="微视酷VR课堂亮相北京小学英语信息化课堂教学研讨会" type="3" href="http://www.duckr.cn" />
                        <PicText data="http://download.duckr.cn/vrschool/news/banner7.jpg" title="VR课堂朝阳润丰小学，探索未来教育新模式" type="3" href="http://www.baidu.com" />
                        <PicText data="http://download.duckr.cn/vrschool/news/banner8.jpg" title="微视酷VR课堂再现哈市 聚首阳明小学探讨未来教育" type="3" href="http://www.duckr.cn" />
                </section>
                <HomeFooter />
            </section>
        );
    }
}

export default News;
