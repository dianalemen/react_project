import React from 'react';
import {Component} from 'react';


class RegisterComponent extends Component {
  render() {
    return (
    <form className="content">
        <div>
            <label for="name">Ім'я</label>
            <input type="text" placeholder="Введіть Ваше ім'я"/>
            <div className="error">
                Name is required
            </div>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" placeholder="Введіть email"/>
            <div className="error">
                Email is required
            </div>
        </div>
        
            <div>
                <label for="password">Пароль</label>
                <input type="password" placeholder="Придумайте пароль"/>
                <div className="error">
                    Password is required
                </div>
            </div>
            <div>
                <label for="password2">Ще раз пароль</label>
                <input type="password" placeholder="Підтвердіть пароль"/>
                <div className="error">
                    Confirm Password is required
            </div>
        </div>
        <button type="submit">Зареєструватися</button>
    </form>
    );
  }
}

RegisterComponent.defaultProps = {
};

export default RegisterComponent;