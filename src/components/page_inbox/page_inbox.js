/* PageInbox Component */
import React, { Component } from 'react';

import { contextData } from '../context';

import Layout from '../page_layout/page_layout';
import Container from '../container/container';
import ChatProfile from '../chat_profile/chat_profile';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';

import './_page_inbox.css';

class PageInbox extends Component {
    state = {
        altTheme: false
    };

    onSwitchTheme() {
        this.setState({ altTheme: !this.state.altTheme }, () => this.updateTheme());
    }

    updateTheme() {
        if (this.state.altTheme) {
            document.documentElement.style.setProperty("--secTextColor", '#747c94');
            document.documentElement.style.setProperty("--primaryColor", "#7663c3");
            document.documentElement.style.setProperty("--primaryTextColor", "#000");
        } else {
            document.documentElement.style.setProperty("--secTextColor", '#b3bcd4');
            document.documentElement.style.setProperty("--primaryColor", "#2a6ed5");
            document.documentElement.style.setProperty("--primaryTextColor", "#3c536d");
        }
    }

    render() {
        return(
            <div className="page-inbox">
                <span className="switch" onClick={this.onSwitchTheme.bind(this)}>
                    Theme 
                </span>
                <contextData.Consumer>
                    {(contextData) => (
                    <Layout>
                        <div className="layout-leftcol">
                            <Sidebar data={contextData.sidebarData} />
                        </div>
                        <div className="layout-rightcol">
                            <Header />
                            <div className="layout-innercont">
                                <Container data={contextData} />
                                <ChatProfile user={contextData.inbox.userData} />
                            </div>
                        </div>
                    </Layout>)}
                </contextData.Consumer>
            </div>
        );
    }
};

export default PageInbox;
