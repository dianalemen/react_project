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
    
        <MessageList filterText={this.state.filterText}/>
        <MessageNew />
</section>
    );
  }
}

export default MessageListComponent;

