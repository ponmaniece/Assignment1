/* TabContent Component */
import React, { Component } from 'react';

import ChatItem from '../chat_item/chat_item';

import './_tab_content.css';

class TabContent extends Component {
    state = {
        activeItem: 3
    };

    renderListItem(item, idx) {
        return(
            <div className={this.state.activeItem === idx ? "list-item active" : "list-item"}>
                <div className="userimg">
                    <img src={`./images/${item.img}.png`} />
                </div>
                <div className="userinfo">
                    <span>
                        <span className="name">
                            {item.name}
                        </span>
                        <span className="message alt">
                            {item.message}
                        </span>
                    </span>
                    <span>
                        <span className="alt">
                            {item.lastSeen}
                        </span>
                        <span className="count">
                            {item.noOfChat}
                        </span>
                    </span>
                </div>
            </div>
        );
    }

    renderList() {
        console.log('PONSS****', this.props)
        const { listData } = this.props.data.inbox;
        if (listData && listData.length > 0) {
            return(
                <div className="listwrap">
                    {listData.map((item, idx) => this.renderListItem(item, idx))}
                </div>
            );
        }
    }

    renderListItemView() {
        const { listViewData } = this.props.data.inbox;
        if (listViewData && listViewData.length > 0) {
            return listViewData.map((item) => <ChatItem item={item} />);
        }
    }

    render() {
        return(
            <div className="tab-content">
                <div className="col">
                    <div className="search">
                        <div class="searchbox">
                            <img src="./images/search.png" />
                            <input placeholder="Search" />
                        </div>
                        <div>
                            Recent
                            <img src="./images/droparw.png" className="arw" />
                        </div>
                    </div>
                    {this.renderList()}
                </div>
                <div className="col">
                    <div className="chat-itemwrap">
                        {this.renderListItemView()}
                    </div>
                    <div className="messagebox">
                        <div>
                            <div className="message" contenteditable="true">Type a message</div>
                        </div>
                        <div className="actions">
                            <span>
                                <img src="./images/message_emoji.png" />
                            </span>
                            <span>
                                <img src="./images/message_attachment.png" />
                            </span>
                            <span className="send">
                                <img src="./images/message_send.png" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TabContent;
