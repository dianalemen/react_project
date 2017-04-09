import React from 'react';
import {Component} from 'react';


class NavListComponent extends Component {
  render() {
    return (
    <div className="chat-left-side">
    <ul className="chat-users-panel">
        <li className="left-nav">
            <div className="left-nav__button">
                <input type="checkbox" className="left-nav__input"/>
            </div>
            <form>
                <input type="search" className="searchInput"/>
                <input type="button"/>
            </form>
            <div className="left-nav__menu">
                <button>
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div>
                    </button>
            </div>
        </li>
    </ul>
    
</div>
    );
  }
}

NavListComponent.defaultProps = {
};

export default NavListComponent;