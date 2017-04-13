import React from 'react';
import {Component} from 'react';

require('../../styles/style_auth.css');


class RegisterComponent extends Component {
  render() {
    return (
        <section>
    <form className="content">
        <div>
            
            <input type="text" placeholder="Введіть Ваше ім'я" className="content-input"/>
            <div className="error">
                
            </div>
        </div>
        <div>
            
            <input type="email" placeholder="Введіть email" className="content-input"/>
            <div className="error">
                
            </div>
        </div>
        
            <div>
                
                <input type="password" placeholder="Пароль" className="content-input"/>
                <div className="error">
                    
                </div>
            </div>
            <div>
            
                <input type="password" placeholder="Підтвердіть пароль" className="content-input"/>
                <div className="error">
                    
            </div>
        </div>
        <button type="submit" className="register-button content-button">Зареєструватися</button>
    </form>
    </section>
    );
  }
}

RegisterComponent.defaultProps = {
};

export default RegisterComponent;