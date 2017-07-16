import React, { Component } from 'react';
import './product.css';
import $ from 'jquery';
import HomeHeader from './HomeHeader.js';
import HomeFooter from './HomeFooter.js';

class Kinds extends Component {
    componentDidMount() {
        
        $(document).ready(function(){
            document.title = 'VRschool|Kinds of Product';
        });
    }
    constructor(props) {
        super(props);
        this.state = {index: 0};
        this.imgAddIndex = this.imgAddIndex.bind(this);
        this.imgMinIndex = this.imgMinIndex.bind(this);
        this.changeImg = this.changeImg.bind(this);
    }
    imgAddIndex() {
        var index = this.state.index + 1;
        if (index > 1) {
            return ;
        }
        this.state = {index: index};
        $(".kinds-pic-box").css("left", "-100%");
        this.changeImg();
    }
    imgMinIndex() {
        var index = this.state.index - 1;
        if (index < 0) {
            return ;
        }
        $(".kinds-pic-box").css("left", "0%");
        this.state = {index: index};
        this.changeImg();
    }
    changeImg () {
        if (1 == this.state.index) {
            $("#kinds-right-arrow").attr('src', 'http://download.duckr.cn/vrschool/product/vr/icon_R_nor.png');
        } else {
            $("#kinds-right-arrow").attr('src', 'http://download.duckr.cn/vrschool/product/vr/icon_R_s.png');
        }
        if (0 == this.state.index) {
            $("#kinds-left-arrow").attr('src', 'http://download.duckr.cn/vrschool/product/vr/icon_L_nor.png');
        } else {
            $("#kinds-left-arrow").attr('src', 'http://download.duckr.cn/vrschool/product/vr/icon_L_s.png');
        }
    }
    componentDidMount() {
        $(document).ready(function() {
            let heroContentHeight = $('.page1').height() - $('.hero-nav').height();
            $('.hero-content').css("height", heroContentHeight);
        });
        $(window).resize(function() {
            let heroContentHeight = $('.page1').height() - $('.hero-nav').height();
            $('.hero-content').css("height", heroContentHeight);
        });
    }
    render() {
        var index = 0;
        return (
            <section className="main">
                <section className="section page1">
                    <HomeHeader data="1"/> 
                    <section className="kinds-pic-box">
                        <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/1_bg_2_1.jpg" />
                        <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/1_bg_3_1.jpg" />
                    </section>
                    <img src="http://download.duckr.cn/vrschool/product/vr/students.png" className="kinds-kids-img" />
                    <section className="kinds-text1-box">
                        <p className="kinds-text1-p1">VR课堂</p>
                        <p className="kinds-text1-p2">打造“真正能上课的VR”。教师课堂一手掌控，学生注意一秒吸引。</p>
                        <p className="kinds-text1-p3">□ 搭载IES沉浸式教育软件系统</p>
                        <p className="kinds-text1-p3">□ 海量课件下载，标准化K12课件</p>
                        <p className="kinds-text1-p3">□ 教师PAD主控，50套学生VR设备</p>
                        <p className="kinds-text1-p3">□ 与课程大纲同步，名师参与制作</p>
                        <p className="kinds-text1-p4">服务：免费培训、系统维护、课件升级</p>
                    </section>
                    <section className="kinds-pad-box">
                        <section className="kinds-pad-arrow-box">
                            <img id="kinds-left-arrow" onClick={this.imgMinIndex} src="http://download.duckr.cn/vrschool/product/vr/icon_L_nor.png" className="kinds-pad-left-arrow" />
                            <img id="kinds-right-arrow" onClick={this.imgAddIndex} src="http://download.duckr.cn/vrschool/product/vr/icon_R_s.png" className="kinds-pad-right-arrow" />
                        </section>
                    </section>
                </section>
                <section className="section page2">
                    <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/2_bg.png" />
                    <section className="kinds-text2-box">
                        <p className="kinds-text1-p1">VR互动教室</p>
                        <p className="kinds-text1-p2">多场景、强互动的VR教学应用</p>
                        <p className="kinds-text1-p3">□ 搭载IES沉浸式教育软件系统</p>
                        <p className="kinds-text1-p3">□ N台主控端</p>
                        <p className="kinds-text1-p3">□ N套强交互VR设备</p>
                        <p className="kinds-text1-p3">□ K12标准课件或定制课件</p>
                        <p className="kinds-text1-p4">服务：免费培训、系统维护、云端升级</p>
                    </section>
                </section>
                <section className="section page3">
                    <img className="kinds-page1-content" src="http://download.duckr.cn/vrschool/product/vr/3_bg_0.png" />
                    <section className="kinds-text3-box">
                        <p className="kinds-text1-p1">VR实训空间</p>
                        <p className="kinds-text1-p2">私人订制个性化VR教学解决方案</p>
                        <p className="kinds-text1-p3">□ 搭载IES沉浸式教育软件系统</p>
                        <p className="kinds-text1-p3">□ 专家级配套教案</p>
                        <p className="kinds-text1-p3">□ 多台主控端</p>
                        <p className="kinds-text1-p3">□ 多套体感VR设备</p>
                        <p className="kinds-text1-p3">□ 专业团队联合开发</p>
                        <p className="kinds-text1-p4">服务：免费培训、系统维护、云端升级</p>
                    </section>
                </section>
                <section className="section page4 fp-auto-height">
                    <section className="kids-bottom-split-box">
                        <HomeFooter />
                    </section>
                </section>
            </section>
        );
    }
}

export default Kinds;
