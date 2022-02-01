import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let posts = [
    {id: 1, message: 'Hi, how are you?', likeCount: 15},
    {id: 2, message: "It's my first post", likeCount: 20}
]

let dialogs = [
    {
        id: 1,
        name: 'Veronika'
    },
    {
        id: 2,
        name: 'Varvara'
    },
    {
        id: 3,
        name: 'Sasha'
    },
    {
        id: 4,
        name: 'Katya'
    },
    {
        id: 5,
        name: 'Liza'
    },
    {
        id: 6,
        name: 'Angelina'
    }
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What are you doing?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},

]
ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
