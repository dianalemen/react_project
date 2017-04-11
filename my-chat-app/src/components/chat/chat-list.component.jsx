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
                users: [{id: 4, login: 'user1'},{id: 5, login: 'user2'},{id: 6, login: 'user3'}]
            })
        }

  render() {
        if(!this.state.users) return <p>Loading...</p>;
    return (
    <div className="chat-left-side">
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