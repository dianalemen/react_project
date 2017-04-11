import React from 'react';
import {Component} from 'react';




class RegisterComponent extends Component {
  render() {
    return (
        <div>
    <form className="content">
        <div>
            
            <input type="text" placeholder="Введіть Ваше ім'я"/>
            <div className="error">
                Name is required
            </div>
        </div>
        <div>
            
            <input type="email" placeholder="Введіть email"/>
            <div className="error">
                Email is required
            </div>
        </div>
        
            <div>
                
                <input type="password" placeholder="Придумайте пароль"/>
                <div className="error">
                    Password is required
                </div>
            </div>
            <div>
            
                <input type="password" placeholder="Підтвердіть пароль"/>
                <div className="error">
                    Confirm Password is required
            </div>
        </div>
        <button type="submit">Зареєструватися</button>
    </form>
    </div>
    );
  }
}

RegisterComponent.defaultProps = {
};

export default RegisterComponent;