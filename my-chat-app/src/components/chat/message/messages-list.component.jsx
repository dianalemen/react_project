require('../../../styles/messages.css');
import React from 'react';
import {Component} from 'react';

import MessageList from './message';
import MessageNew from './message-new.component';

class MessageListComponent extends Component {

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        this.setState({
                messages: [{id: 4, text: 'hello1'},{id: 5, text: 'hello2'},{id: 6, text: 'hello3'}]
            })
        }

  render() {
       if(!this.state.messages) return <p>Loading...</p>;
    return (
<section className="chat-right-side">
    <ul className="chat-content">
        <li className="chat-content__info">
            <button><span className="icon-envelop "></span></button>
            <form>
                <input type="search" name="search" id="serchInput"/>
                <input type="button"/>
            </form>
            <button><span className="icon-user "></span></button>
        </li>
</ul>
            
                <MessageList items={this.state.messages}/>
         
    <MessageNew />
</section>
    );
  }
}

MessageListComponent.defaultProps = {
};

export default MessageListComponent;