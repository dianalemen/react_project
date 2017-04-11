import React from 'react';
import {Component} from 'react';

import MessageList from './messages-list';

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
    <ul className="chat-content ">
        <li className="chat-content__info">
            <button><span className="icon-envelop "></span></button>
            <form>
                <input type="search" name="search" id="serchInput"/>
                <input type="button"/>
            </form>
            <button><span className="icon-user "></span></button>
        </li>
    </ul>
    <ul className="chat-content__massege1">
        <li className="chat-content__massege" >
            <div className="user-content__image "></div>
            <div className="chat-content__container ">
                
            <ul className="chat-content__text ">
                <MessageList items={this.state.messages}/>
            </ul>
               
                <div className="chat-content__time ">
                    <p>Date</p>
                </div>
            </div>
            <button>Get</button>
            <button>Join</button>
        </li>
    </ul>
</section>
    );
  }
}

MessageListComponent.defaultProps = {
};

export default MessageListComponent;