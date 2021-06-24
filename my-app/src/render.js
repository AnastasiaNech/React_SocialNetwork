import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';


export let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState = {state}
                 addPost = {addPost}
                 updatePost ={updatePost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
