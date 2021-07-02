import React from 'react';

let renderTree =  () => {}

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

export const addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree();
}

export const updatePost = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    renderTree();
}

export const subscribe = (observer) => {
    renderTree = observer; //паттерн observer
}

export default state;


