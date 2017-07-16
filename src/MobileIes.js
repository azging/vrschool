import React, { Component } from 'react';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class MobileIes extends Component {
    componentDidMount() {
        $(document).ready(function(){
            document.title = 'VRschool|Kinds of Product';
        });
    }
    render() {
        return (
            <section className="home">
                <HomeHeader data="1" />
                <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/ies/VR1.jpg" />
                <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/ies/VR2.jpg" />
                <img className="mobile-img" src="http://download.duckr.cn/vrschool/mobile/ies/VR3.jpg" />
                <HomeFooter />
            </section>
        );
    }
}

export default MobileIes;
