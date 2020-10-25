import React from 'react';

/* Hardcoded Data */
export const contextData = React.createContext({
    tabItems: [
        'All',
        'Marked',
        'Friends',
        'Work'
    ],
    inbox: {
        listData: [
            {
                name: 'John de Smith',
                lastSeen: 'Today',
                message: 'Did you see the latest app?',
                noOfChat: 1,
                img: 'list_profile1'
            },
            {
                name: 'Margaret Adamson',
                lastSeen: 'Today',
                message: 'OMG, I just found about new project! it looks amazing',
                noOfChat: 5,
                img: 'list_profile2'
            },
            {
                name: 'John de Smith',
                lastSeen: 'Today',
                message: 'Did you see the latest app?',
                noOfChat: 1,
                img: 'list_profile3'
            },
            {
                name: 'John de Smith',
                lastSeen: 'Today',
                message: 'Did you see the latest app?',
                noOfChat: 1,
                img: 'list_profile4'
            },
            {
                name: 'John de Smith',
                lastSeen: 'Today',
                message: 'Did you see the latest app?',
                noOfChat: 1,
                img: 'list_profile1'
            },
            {
                name: 'John de Smith',
                lastSeen: 'Today',
                message: 'Did you see the latest app?',
                noOfChat: 1,
                img: 'list_profile1'
            }
        ],
        listViewData: [
            {
                name: 'Patrick',
                imageSrc: 'list_profile1',
                time: '11.11',
                messages: ['Hey, remember about the meeting?']
            },
            {
                name: 'Patrick',
                imageSrc: 'list_profile2',
                time: '11.08',
                messages: ['Yep, of course!', 'I shall be there at eleven-ish', 'Same place as usual, is that ok for you?']
            },
            {
                name: 'Patrick',
                imageSrc: 'list_profile1',
                time: '11',
                messages: ['Hey, remember about the meeting']
            },
            {
                name: 'Patrick',
                imageSrc: 'list_profile2',
                time: '11.09',
                messages: ['Hey, remember about the meeting']
            },
        ],
        userData: {
            name: 'Patrick jhon',
            lastSeen: 'today',
            email: 'pon@gmail.com',
            phone: '+91 986225268',
            groups: ['Work', 'Friends']
        }
    },
    sidebarData: {
        menu: [
            {
                icon: 'inbox',
                label: 'Inbox',
                noOfItems: 23
            },
            {
                icon: 'important',
                label: 'Important',
                noOfItems: ''
            },
            {
                icon: 'sent',
                label: 'Sent',
                noOfItems: 12
            },
            {
                icon: 'drafts',
                label: 'Drafts',
                noOfItems: 6
            },
            {
                icon: 'chat',
                label: 'Chat',
                noOfItems: 6
            },
            {
                icon: 'bin',
                label: 'Bin',
                noOfItems: 12
            }
        ],
        user: {
            email: 'myemail@dmail.com',
            name: 'John Zed',
            totalMemory: 25,
            usage: 20
        }
    }
});
