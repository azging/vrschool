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
                $('#img-text0').css('top', '9%');
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
    componentDidMount() {
        $(document).ready(function(){
            document.title = 'VRschool|Total Solution';
        });
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
                        <p className="solution-text-title">VR教学教室</p>
                        <p className="solution-text-content1">紧贴课堂需求，全方位直击课堂重难点，同步云端数据，实现课堂互动，把控课堂进度，便利课堂管理。</p>
                        <p className="solution-text-content2">应用领域：K12普通教室、科学教室、创客教室等</p>
                    </section>
                    <section id="img-text1" className="solution-text2-box">
                        <p className="solution-text-title">VR创客教室</p>
                        <p className="solution-text-content1">VR创客教室以培养学生创新精神和动手能力为重点，将VR技术与STEAM教育、创客教育相融合，创造沉浸式体验环境，激发学生学习兴趣，让学生成为学习的主动者。</p>
                        <p className="solution-text-content2">应用领域：创意创想；探寻科学原理等</p>
                    </section>
                    <section id="img-text2" className="solution-text3-box">
                        <p className="solution-text-title">VR科学实验室</p>
                        <p className="solution-text-content1">应用VR技术，创建虚拟实验室，实现学生在虚拟环境下的科学探索。</p>
                        <p className="solution-text-content2">应用领域：物理实验；化学实验；生物实验等</p>
                    </section>
                    <section id="img-text3" className="solution-text4-box">
                        <p className="solution-text-title">VR研学游学</p>
                        <p className="solution-text-content1">借助计算机图像技术以三维建模的形式构建虚拟大空间，配套的地图功能，场景仿真模拟，足不出户，尽可遍游天下。</p>
                        <p className="solution-text-content2">应用领域：场馆展示；大空间展示；历史遗迹复原等</p>
                    </section>
                    <section id="img-text4" className="solution-text5-box">
                        <p className="solution-text-white-title">VR博物馆</p>
                        <p className="solution-text-white-content1">1:1还原真实博物馆，突破传统的陈列形式，在博物馆中自由探索，多角度近距离观察文物和展品。</p>
                        <p className="solution-text-white-content2">应用领域：古生物还原；文物还原；艺术品展示等。</p>
                    </section>
                    <section id="img-text5" className="solution-text6-box">
                        <p className="solution-text-title">VR安全访问站</p>
                        <p className="solution-text-content1">打破传统演示讲解模式，结合VR技术体验事故或灾难现场，让安防教育成为真正的实战演习！</p>
                        <p className="solution-text-content2">应用领域：消防安全；交通安全；设备或工具的安全使用等</p>
                    </section>
                    <section id="img-text6" className="solution-text7-box">
                        <p className="solution-text-white-title">VR实操车间</p>
                        <p className="solution-text-white-content1">借助VR技术建立行业实训室，多复杂、高损耗一手掌控，全仿真操作空间，高效提高实操安全性。</p>
                        <p className="solution-text-white-content2">应用领域：器械的拆散和组装；器械的结构原理展示等</p>
                    </section>
                    <section id="img-text7" className="solution-text8-box">
                        <p className="solution-text-white-title">VR探秘</p>
                        <p className="solution-text-white-content1">高清探秘宇宙空间、自然地理、生命科学等，借由VR技术，从科学视角解读神奇世界，探索谜团奇险。</p>
                        <p className="solution-text-white-content2">应用领域：展览展示，风景地貌展示等</p>
                    </section>
                    <section id="img-text8" className="solution-text9-box">
                        <p className="solution-text-white-title">VR天下</p>
                        <p className="solution-text-white-content1">实景拍摄，高清晰度的全景虚拟展示，带来身临其境的体验。</p>
                        <p className="solution-text-white-content2">应用领域：展览展示、风景地貌展示等</p>
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
