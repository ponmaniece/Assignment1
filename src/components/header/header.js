/* Header Component */
import React, { Component } from 'react';

import './_header.css';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="actions">
                    <span>
                        <img src="./images/header_refresh.png" />
                    </span>
                    <span>
                        <img src="./images/header_trash.png" />
                    </span>
                </div>
                <div>
                    Hi John!
                    <img src="./images/droparw.png" className="arw" />
                </div>
            </div>
        );
    }
};

export default Header;
