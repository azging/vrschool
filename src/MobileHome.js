import React, { Component } from 'react';
import HomeHeader from './HomeHeader.js';
var $ = require('jquery');

class MobileHome extends Component {
    iesJump() {
        window.location.href = 'http://47.93.28.215/vr/product/ies/';
    }
    devJump() {
        window.location.href = 'http://developer.wizsch.com/';
    }
    componentDidMount() {
        $(document).ready(function(){
            document.title = 'VRschool|Home';
        });
    }
    render() {
        return (
            <section className="home">
                <HomeHeader data="0" />
                <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/home/home_02.png" />
                <section className="mobile-home-section">
                    <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/home/home_03.png" />
                    <img onClick={this.iesJump} className="mobile-home-know-ies" src="http://download.duckr.cn/vrschool/mobile/home/button_05.png" />
                    <img onClick={this.devJump} className="mobile-home-join-ies" src="http://download.duckr.cn/vrschool/mobile/home/button_08.png" />
                </section>
                <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/home/home_04.png" />
                <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/home/home_05.jpg" />
            </section>
        );
    }
}

export default MobileHome;
