import React, { Component } from 'react';
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
        if (!$("#control-img" + index).hasClass("solution-big-stroke")) {
            $("#control-img" + index).addClass("solution-opacity");
        }
        $("#control-img" + index).attr('src', 'http://download.duckr.cn/vrschool/solution/btn_' + imgIndex + '_selected.png');
        $("#control-img" + index).width(70);
        $("#control-img" + index).height(70);
        $("#control-img" + index).css("top", 30);
        $("#control-img" + index).css("left", 15);
        $("#control-p" + index).css("bottom", 25);
        if ($("#control-img" + index).hasClass("solution-big-stroke")) {
            $("#control-img" + index).removeClass("solution-big-stroke");
            $("#control-img" + index).addClass("solution-stroke");
        }
    }
    imageClick(index) {
        for (var i = 0; i < 9; ++i) {
            $("#control-img" + i).removeClass("solution-stroke");
            $("#control-img" + i).addClass("solution-opacity");
            $("#img-text" + i).hide();
        }
        $("#control-img" + index).removeClass("solution-opacity");
        $("#control-img" + index).addClass("solution-big-stroke");
        $("#img-text" + index).show();
        var imgIndex = parseInt(index) + 1;
        $("#solution-bg").attr('src', 'http://download.duckr.cn/vrschool/solution/Bg_' + imgIndex  + '_1.jpg');
        $("#img-text" + index).css('opacity', '1');
        switch (imgIndex) {
            case 1:
                $('#img-text0').css('top', '19%');
                break;
            case 2:
                $('#img-text1').css('right', '8.8%');
                break;
            case 3:
                $('#img-text2').css('top', '19%');
                break;
            case 4:
                $('#img-text3').css('top', '9%');
                break;
            case 5:
                $('#img-text4').css('top', '21%');
                break;
            case 6:
                $('#img-text5').css('top', '5%');
                break;
            case 7:
                $('#img-text6').css('top', '22%');
                break;
            case 8:
                $('#img-text7').css('top', '6%');
                break;
            case 9:
                $('#img-text8').css('top', '7%');
                break;
            default:
                break;
        }
    }
    componentDidMount() {
        $(document).ready(function(){
            $('.solution-text1-box').css('opacity', '1')
            $('.solution-text1-box').css('top', '28%')
            $('#control-img0').addClass('solution-stroke');
            $('#control-img0').removeClass('solution-opacity');
        });
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
            <HomeHeader data="2" />
            
            <HomeFooter />
          </section>
        );
    }
}

export default Solution;
