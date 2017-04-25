import '../../../styles/messages.css';
import React from 'react';
import {Component} from 'react';

import MessageList from './message';
import MessageNew from './message-new.component';

class MessageListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterText: ''
        }
    }
    handleFilterTextInput(e) {
                    this.setState({
                    filterText: e.target.value.toLowerCase()
        });
    }

  render() {
     
    return (
<section className="chat-right-side">
    <ul className="chat-content">
        <li className="chat-content__info">
            <button><span className="icon-envelop "></span></button>
            <form>
                <input type="search" name="search" id="serchInput" onChange={this.handleFilterTextInput.bind(this)}/>
                <input type="button"/>
            </form>
            <button><span className="icon-user"></span></button>
        </li>
</ul>
        <MessageList filterText={this.state.filterText}/>
        <MessageNew />
</section>
    );
  }
}

export default MessageListComponent;

