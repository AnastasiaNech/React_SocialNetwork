import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from 'react-router-dom';

const App = (props) => {
    return (
            <div className='background-image'>
            <div className='app-wrapper'>
                <Header />
                <Navbar state = {props.state.dialogsPage} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs store = {props.store}/>} />
                    <Route path='/profile'
                           render={() => <Profile profilePage = {props.state.profilePage}
                                                  dispatch = {props.dispatch}/>} />
                    <Route path='/news'
                           render={() => <News/>} />
                    <Route path='/music'
                           render={() => <Music/>} />
                    <Route path='/settings'
                           render={() => <Settings/>} />
                </div>
            </div>
            </div>
        );
}

export default App;
