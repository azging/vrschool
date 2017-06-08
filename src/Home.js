import React, { Component } from 'react';
import './home.css'; 
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

class Home extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <section className="home-banner4-box">
                <img className="home-banner4-bg" src="/static/image/home/banner4.png" />
                <section className="home-banner4-text-box">
                </section>
            </section>
        );
    }
}

export default Home;
