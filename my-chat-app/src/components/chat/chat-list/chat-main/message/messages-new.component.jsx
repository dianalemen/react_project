import React from 'react';
import {Component} from 'react';


class MessageNewComponent extends Component {
  render() {
    return (
<section className="chat-input">
    <form className="chat-input__msg ">
        <textarea placeholder="Введіть повідомлення... "></textarea>
        <button type="submit"> <span className="icon-files-empty "></span></button>
    </form>
</section>
    );
  }
}

MessageNewComponent.defaultProps = {
};

export default MessageNewComponent;