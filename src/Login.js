import React, { Component } from 'react';
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

class Login extends Component {
    clickLogin() {
        $(".login-middle-input-hint").show();
		setTimeout(
      		() => { $(".login-middle-input-hint").hide(); },
      		3000	
    	);
    }
    
    componentDidMount() {
	}
    render() {
        return (
            <section className="login-box">
                <img className="login-bg" src="http://download.duckr.cn/vrschool/login/login-bg.png" />
                <img className="login-logo" src="http://download.duckr.cn/vrschool/login/logo.png" />
                <img className="login-middle-rect1" src="http://download.duckr.cn/vrschool/login/rect1.png" />
                <img className="login-middle-rect2" src="http://download.duckr.cn/vrschool/login/rect2.png" />
                <section className="login-middle-rect2">
                    <section className="login-middle-input-box">
                        <p className="login-middle-input-title">学校登录</p>
                        <section className="login-middle-input-wrap1">
                            <section className="login-middle-input-left">
                                <img src="http://download.duckr.cn/vrschool/login/user-icon.png" />
                            </section>
                            <input className="login-middle-input-right" placeholder="用户名"/>
                        </section>
                        <section className="login-middle-input-wrap2">
                            <section className="login-middle-input-left">
                                <img src="http://download.duckr.cn/vrschool/login/pwd-icon.png" />
                            </section>
                            <input className="login-middle-input-right" placeholder="密码" type="password"/>
                        </section>
                        <button onClick={this.clickLogin} className="login-middle-input-button">
                        登录
                        </button>
                        <p className="login-middle-input-hint">用户名错误</p>
                    </section>
                 </section>
            </section>
        );
    }
}

export default Login;
