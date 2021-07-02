import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updatePost} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState = {state}
                 addPost = {addPost}
                 updatePost ={updatePost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderTree(state);
subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
