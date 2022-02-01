import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";
import {stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                <Route path = '/profile' element={<Profile posts = {props.state.profilePage.posts}/>} />
                <Route path = '/dialogs/*' element={<Dialogs dialogs = {props.state.dialogsPage.dialogs} messages = {props.state.dialogsPage.messages}/>} />
                <Route path = '/news' element={<News/>} />
                <Route path = '/music' element={<Music/>} />
                <Route path = '/settings' element={<Settings/>} />
                </Routes>

            </div>

        </div>
        </BrowserRouter>

    );
}

export default App;
