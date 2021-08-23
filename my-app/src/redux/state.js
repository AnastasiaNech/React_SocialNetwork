import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: { // свойство store
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: '15'},
                {id: 2, message: 'Its my first post', likesCount: '0'}
            ],
            newPostText: 'it'
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
        },
        sidebar : {}
    },
    _callSubscriber() {
    }, //метод  объекта store
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //паттерн observer
    },

    dispatch(action) {  //{ type : 'ADD-POST'}
        if (action === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber();
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const  updateNewPostTextActionCreator = (text) =>
        ({type: UPDATE_NEW_POST_TEXT,newPostText: text})
export default store;
window.store = store;


