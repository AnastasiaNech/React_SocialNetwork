import React from 'react';
import {renderTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '15'},
            {id: 2, message: 'Its my first post', likesCount: '0'}
        ],
        newPostText: '1'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'HALLO!'},
            {id: 3, message: 'Hello!'}
        ],
        dialogs: [
            {id: 1, name: 'Nasty'},
            {id: 2, name: 'Rost'},
            {id: 3, name: 'Nadia'}
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
}

export let updatePost = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    renderTree(state);
}

export default state;


