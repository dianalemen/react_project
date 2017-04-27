import '../../styles/style_auth.css';
import React from 'react';
import {Component} from 'react';




class RegisterComponent extends Component {
     constructor(props){
            super(props);
            this.state = {
                credentials:{
                    username: '',
                    password: ''
                }
            }
            
        }

        loginIn(){
            var myHeaders = new Headers();
            myHeaders.set('Content-Type', 'application/json');
            var myInit = {
                    method: 'post',
                    headers: myHeaders,
                    mode: 'cors',
                    body: JSON.stringify(this.state.credentials)};

             fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup', myInit)
            .then(console.log)
        }

        changeInput(field){
            return event => {
            const credentials = this.state.credentials;
            credentials[field] = event.target.value;
            this.setState({credentials: credentials})
            }
        }

  render() {
    return (
        <section className="auth-section">
    <form className="content">
        <div>
            <input type="text" placeholder="Введіть Ваше ім'я" className="content-input" onChange={this.changeInput('username').bind(this)}/>
        </div>
        <div>
            <input type="email" placeholder="Введіть email" className="content-input"/>
        </div>
        
            <div>
                <input type="password" placeholder="Пароль" className="content-input" onChange={this.changeInput('password').bind(this)}/>
            </div>
            <div>
                <input type="password" placeholder="Підтвердіть пароль" className="content-input"/>
        </div>
        <button type="submit" className="register-button content-button" onClick={this.loginIn.bind(this)}>
            Зареєструватися</button>
    </form>
    </section>
    );
  }
}

RegisterComponent.defaultProps = {
};

export default RegisterComponent;