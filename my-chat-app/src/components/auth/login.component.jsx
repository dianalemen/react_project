require('../../styles/style_auth.css');
import React from 'react';
import {Component} from 'react';



class LoginComponent extends Component {
        constructor(props){
            super(props);
            this.state = {};
            
        }
        signIn(){
            var myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');
            var myInit = {
                    method: 'post',
                    headers: myHeaders,
                    mode: 'cors',
                    body: JSON.stringify({username: 'Diana2', password: 'admin'})};

             fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', myInit)
            .then((res) => res.json())
            .then((resObj) => localStorage.setItem('token', resObj.token))
            .then()
        }

  render() {
    return (
   <section className="auth-section">
    <div className="content">
        <div >
            <input type="email" placeholder="Ваш email" name="email" className="content-input"/>
        </div>
        <div >
            <input type="password" placeholder="Ваш пароль" name="password" className="content-input"/>
        </div>
        <div>
            <button className="content-button">Увійти</button>
        </div>
        <div className="social">
            <p>Залогуватися через соціальні мережі</p>
            <button id="google-login-btn" className="content-button" onClick={this.signIn.bind(this)}>
                Login with Google+
            </button>
        </div>
    </div>

    <div> <br /></div>
</section>
    );
  }
}

export default LoginComponent;