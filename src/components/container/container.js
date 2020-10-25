/* Container Component */
import React, { Component } from 'react';

import Tab from '../tab/tab';
import TabContent from '../tab_content/tab_content';

import './_container.css';

class Container extends Component {
    render() {
        return(
            <div className="container">
                <div className="tabhead">
                    {this.props.data.tabItems.map((item, idx) => <Tab item={item} active={idx === 1} />)}
                </div>
                <TabContent data={this.props.data} />
            </div>
        );
    }
};

export default Container;
