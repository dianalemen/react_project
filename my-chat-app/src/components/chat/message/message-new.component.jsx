import React from 'react';
import {Component} from 'react';


class MessageNewComponent extends Component {
  render() {
    return (
<div className="chat-input">
    <form className="chat-input__msg ">
        <textarea placeholder="Введіть повідомлення... "></textarea>
        <button type="submit"> <span className="icon-files-empty "></span></button>
    </form>
</div>
    );
  }
}

MessageNewComponent.defaultProps = {
};

export default MessageNewComponent;