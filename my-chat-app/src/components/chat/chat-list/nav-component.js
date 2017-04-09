import React from 'react';


class NavListComponent extends React.Component {
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
    <ul>
        <li className="user-content">
            <div className="user-content__image ">
            </div>
            <div className="user-content__status ">
                <p>my chat</p>
                <p>my new chat</p>
            </div>
            <div className="user-content__time ">
                <p className="time "> 15:00</p>
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