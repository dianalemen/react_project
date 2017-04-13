import React from 'react';
import {Component} from 'react';

import '../../styles/style_auth.css';

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
            .then(console.log)
        }

  render() {
    return (
   <section>
    <div className="content">
        <div >
            <input type="email" placeholder="Your email" name="email" className="content-input"/>
        </div>
        <div >
            <input type="password" placeholder="Your password" name="password" className="content-input"/>
        </div>
        <div>
            <button className="content-button">Login</button>
        </div>
        <div className="social">
            <p>Login with social media</p>
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