require('../../../styles/message-new.css');
import React from 'react';
import {Component} from 'react';


class MessageNewComponent extends Component {
  render() {
    return (
<div className="chat-input">
    <div className="chat-input__msg ">
        <textarea placeholder="Введіть повідомлення... "></textarea>
        <button type="submit"> <span>Send</span></button>
    </div>
</div>
    );
  }
}

MessageNewComponent.defaultProps = {
};

export default MessageNewComponent;