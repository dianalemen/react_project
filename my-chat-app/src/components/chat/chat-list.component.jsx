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
                users: [{login: 'user1'},{login: 'user2'},{login: 'user3'}]
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