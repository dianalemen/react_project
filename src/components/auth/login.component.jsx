import '../../styles/style_auth.css';
import React from 'react';
import {Component} from 'react';
import { Redirect } from 'react-router-dom';
//import io from 'socket.io-client';

class LoginComponent extends Component {

        constructor(props){
            super(props);
            this.state = {
                credentials:{
                    username: '',
                    password: ''
                }
            };
            
        }
       // socket = io.connect('https://eleksfrontendcamp-mockapitron.rhcloud.com:8000');


        signIn(e){
            e.preventDefault();
            var myHeaders = new Headers();
            myHeaders.set('Content-Type', 'application/json');
            var myInit = {
                    method: 'post',
                    headers: myHeaders,
                    mode: 'cors',
                    body: JSON.stringify(this.state.credentials)};

             fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', myInit)
            .then((res) => res.json())
            .then((resObj) => {
                return localStorage.setItem('token', resObj.token)
            })
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        }

        changeInput(field){
            return event => {
            const credentials = this.state.credentials;
            credentials[field] = event.target.value;
            this.setState({credentials: credentials})
            }
        }

  render() {
      if (this.state.redirect)  return( <Redirect to='/chat' />);
    return (
   <section className="auth-section">
    <div className="content">
        <div >
            <input type="email" placeholder="Ваш email" name="email" className="content-input" onChange={this.changeInput('username').bind(this)}/>
        </div>
        <div >
            <input type="password" placeholder="Ваш пароль" name="password" className="content-input" onChange={this.changeInput('password').bind(this)}/>
        </div>
        <div>
            <button className="content-button" onClick={this.signIn.bind(this)}>Увійти</button>
        </div>
        <div className="social">
            <p>Залогуватися через соціальні мережі</p>
            <button id="google-login-btn" className="content-button">
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