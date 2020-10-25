import React, { Component } from 'react';

import './_chat_item.css';

class ChatItem extends Component {
    render() {
        const { item } = this.props;

        return(
            <div className="chat-item">
                <span className="profile">
                    <img src={`./images/${item.imageSrc}.png`} />
                </span>
                <span className="time">{item.time}</span>
                {item.messages.map((obj) => <span class="message">{obj}</span>)}
            </div>
        );
    }
};

export default ChatItem;
