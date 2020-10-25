/* Tab Component */
import React, { Component } from 'react';

import './_tab.css';

class Tab extends Component {
    state = {
        activeItem: 'All'
    };

    render() {
        const isActiveTab = this.state.activeItem === this.props.item;

        return(
            <div className={isActiveTab ? 'tab active' : 'tab'}>
                {this.props.item}
                {isActiveTab && <span className="activeline"></span>}
            </div>
        );
    }
};

export default Tab;
