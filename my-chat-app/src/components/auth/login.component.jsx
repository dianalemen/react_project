import React from 'react';
import {Component} from 'react';



class LoginComponent extends Component {
  render() {
    return (
   <section>
    
    <form className="content">
        <div>
            <input type="email" placeholder="Your email" name="email" />
        </div>
        <div>
            <input type="password" placeholder="Your password" name="password" />
        </div>
        <div>
            <button>Login</button>
        </div>
        <div className="social">
            <p>Login with social media</p>
            <button id="google-login-btn">Login with Google</button>
        </div>
    </form>

    <div> <br />Your email is</div>

</section>
    );
  }
}

LoginComponent.defaultProps = {
};

export default LoginComponent;