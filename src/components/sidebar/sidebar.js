/* Sidebar Component */
import React, { Component } from 'react';

import './_sidebar.css';

class Sidebar extends Component {
    state = {
        activeIdx: 4
    };

    renderItems() {
        const { data } = this.props;

        if (data && data.menu && data.menu.length > 0) {
            return data.menu.map((item, idx) => {
                return(
                    <div className={this.state.activeIdx === idx ? "item active" : "item"}>
                        <span>
                            {this.state.activeIdx === idx && <span className="dot"></span>}
                            <span className="icon">
                                <img src={`./images/sidebar_${item.icon}.png`} />
                            </span>
                            {item.label}
                        </span>
                        {item.noOfItems &&
                        <span className="count">{item.noOfItems}</span>}
                    </div>
                )
            });
        }
    }

    render() {
        const { data } = this.props;

        return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src="./images/logo.png" />
                </div>
                <div className="sidebar-container">
                    <div className="sidebar-mainmenu">
                        <div className="menu">
                            <span className="dot"></span>
                            <img src="./images/sidebar_inbox_active.png" />
                        </div>
                        <div className="menu">
                            <img src="./images/sidebar_groups.png" />
                        </div>
                        <div className="menu"> 
                            <img src="./images/sidebar_calendar.png" />
                        </div>
                    </div>
                    <div className="sidebar-submenu">
                        <button className="new-msg">New message</button>
                        {this.renderItems()}
                        <div className="userinfo">
                            <span className="name">{data.user.name}</span>
                            <span className="email alt">{data.user.email}</span>
                            <span className="memory">
                                <span className="label">
                                    <span>{data.user.usage} GB </span>
                                    <span className="alt">/ {data.user.totalMemory} GB</span>
                                </span>
                                <span className="progress">
                                    <span className="value"
                                        style={{ width: (data.user.usage / data.user.totalMemory) * 100 }}>
                                    </span>
                                </span>
                            </span>
                            <span className="premium">
                                <img src="./images/premium.png" />
                                <span class="label">Get Premium</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Sidebar;
