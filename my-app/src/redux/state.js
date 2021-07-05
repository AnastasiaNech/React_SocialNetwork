import React from 'react';

let store = {
    _state : { // свойство store
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

    },
    getState () {
        return this._state;
    },
    _callSubscriber() { }, //метод  объекта store

    addPost (postMessage) {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount:0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }, //метод  объекта store

    updatePost (newPostText)  {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber();
    },//метод  объекта store
    subscribe (observer) {
        this._callSubscriber = observer; //паттерн observer
    },

}
export default store;
window.store = store;


