/* PageLayout Component */
import React, { Component } from 'react';

import './_page_layout.css';

class PageLayout extends Component {
    render() {
        return(
            <div className="page-layout">
                {this.props.children}
            </div>
        );
    }
};

export default PageLayout;
