import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
            ],
            newMessageBody: ''
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
        if (action.type === ADD_POST) {
            let post = this._state.profilePage.newPostText;
            this._state.profilePage.posts.push({id: 2, message: post, likesCount: '0'});
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 4, message: body});
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
        ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextCreator = (body) =>
        ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default store;
window.store = store;


