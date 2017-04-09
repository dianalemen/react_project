import React from 'react';
import {Component} from 'react';


class MessageListComponent extends Component {
  render() {
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
                <div className="chat-content__text ">
                    <p>message
                    </p>
                </div>
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