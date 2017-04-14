require('../../styles/chat-list.css');
import React from 'react';
import {Component} from 'react';

import List from './user-list';

class ChatListComponent extends Component {

     constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        this.setState({
                users: [{id: 1, login: 'user1'},
                        {id: 2, login: 'user2'}
                        ]
            })
        }

  render() {
        if(!this.state.users) return <p>Loading...</p>;
    return (
    <div className="chat-left-side">
            <ul className="chat-users-panel">
                <li className="left-nav">
                    <div className="left-nav__button">
                        <input type="checkbox" className="left-nav__input" />
                    </div>
                    <div className="left-nav__serch">
                        <form>
                            <input type="search" className="left-nav__type-search"/>
                            <input type="button" className="left-nav__button"/>
                        </form>
                    </div>
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
                <List items={this.state.users}/>
            </ul>
    </div>
    );
  }

}


ChatListComponent.defaultProps = {
};

export default ChatListComponent;