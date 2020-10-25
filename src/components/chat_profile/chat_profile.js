import React, { Component } from 'react';

import './_chat_profile.css';

class ChatProfile extends Component {
    renderItem(obj) {
        const { user } = this.props;

        return(
            <div className="linkitem">
                <span className="icon"><img src={`./images/chat_${obj.key}.png`} /></span>
                <span className="label">{obj.value}</span>
                {obj.key === 'groups' ? 
                    <div className="actions">
                        {user[obj.key].map((item) => <button class={item.toLowerCase()}>{item}</button>)}
                    </div>
                    : <span className="value">{user[obj.key]}</span>
                }
            </div>
        );
    }

    render() {
        const { user } = this.props;
        const userLinks = [
            {key: 'email', value: 'Email:'},
            {key: 'phone', value: 'Tel:'},
            {key: 'groups', value: 'Groups:'}
        ];

        return(
            <div className="chat-profile">
                <img src="./images/chat_profile.png" className="img" />
                <span className="name">{user.name}</span>
                <span className="lastseen">
                    Last conversation: 
                    <span className="value">{user.lastSeen}</span>
                </span>
                <button className="send">Send email</button>
                {userLinks.map((item) => this.renderItem(item))}
            </div>
        );
    }
};

export default ChatProfile;
