import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState = {state}
                 addPost = {store.addPost.bind(store)}
                 updatePost ={store.updatePost.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderTree(store.getState());
store.subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

