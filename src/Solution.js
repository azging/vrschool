import React, { Component } from 'react';
import './home.css';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';
var $ = require('jquery');

class SolutionControl extends Component {
    bigImage(index) {
        var imgIndex = parseInt(index) + 1;
        $("#control-img" + index).removeClass("solution-opacity");
        $("#control-img" + index).attr('src', 'http://download.duckr.cn/vrschool/solution/btn_' + imgIndex + '_selected.png');
        $("#control-img" + index).width(110);
        $("#control-img" + index).height(110);
        $("#control-img" + index).css("top", 10);
        $("#control-img" + index).css("left", -5);
        $("#control-p" + index).css("bottom", 10);
    }
    smallImage(index) {
        var imgIndex = parseInt(index) + 1;
        $("#control-img" + index).addClass("solution-opacity");
        $("#control-img" + index).attr('src', 'http://download.duckr.cn/vrschool/solution/btn_' + imgIndex + '_selected.png');
        $("#control-img" + index).width(70);
        $("#control-img" + index).height(70);
        $("#control-img" + index).css("top", 30);
        $("#control-img" + index).css("left", 15);
        $("#control-p" + index).css("bottom", 25);
    }
    imageClick(index) {
        for (var i = 0; i < 9; ++i) {
            $("#control-img" + i).removeClass("solution-stroke");
            $("#control-img" + i).addClass("solution-opacity");
        }
        $("#control-img" + index).removeClass("solution-opacity");
        $("#control-img" + index).addClass("solution-stroke");
        var imgIndex = parseInt(index) + 1;
        $("#solution-bg").attr('src', 'http://download.duckr.cn/vrschool/solution/Bg_' + imgIndex  + '.png');
    }
    render() {
        var imgId = "control-img" + this.props.data;
        var pId = "control-p" + this.props.data;
        return (
            <section className="solution-control"  >
                <img className="solution-opacity" id={imgId} onMouseEnter={this.bigImage.bind(this, this.props.data)} onMouseLeave={this.smallImage.bind(this, this.props.data)} onClick={this.imageClick.bind(this, this.props.data)} src= {this.props.imgUrl}/>
                <p id={pId}>{this.props.name}</p>
            </section>
        );
    }
}

class Solution extends Component {
  render() {
    return (
      <section className="home">
        <HomeHeader />
        <section className="solution-container-box">
            <img id="solution-bg" src="http://download.duckr.cn/vrschool/solution/Bg_1.png" /> 
            <section className="solution-control-opacity">
            </section>
            <section className="solution-control-box">
                <SolutionControl data="0" name="VR教学教室" imgUrl="http://download.duckr.cn/vrschool/solution/btn_1_default.png" />
                <SolutionControl data="1" name="VR创客教室" imgUrl="http://download.duckr.cn/vrschool/solution/btn_2_default.png"/>
                <SolutionControl data="2" name="VR科学实验室" imgUrl="http://download.duckr.cn/vrschool/solution/btn_3_default.png"/>
                <SolutionControl data="3" name="VR研学游学" imgUrl="http://download.duckr.cn/vrschool/solution/btn_4_default.png"/>
                <SolutionControl data="4" name="VR博物馆"imgUrl="http://download.duckr.cn/vrschool/solution/btn_5_default.png"/>
                <SolutionControl data="5" name="VR安全访问站"imgUrl="http://download.duckr.cn/vrschool/solution/btn_6_default.png"/>
                <SolutionControl data="6" name="VR实操车间"imgUrl="http://download.duckr.cn/vrschool/solution/btn_7_default.png"/>
                <SolutionControl data="7" name="VR探秘"imgUrl="http://download.duckr.cn/vrschool/solution/btn_8_default.png"/>
                <SolutionControl data="8" name="VR天下" imgUrl="http://download.duckr.cn/vrschool/solution/btn_9_default.png"/>
            </section>
        </section>
        <HomeFooter />
      </section>
    );
  }
}

export default Solution;
