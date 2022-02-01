import React from "react";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemPropsType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "../components/Dialogs/Message/Message";

type profilePageType = {
    posts: Array<PostType>
}

type dialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage:dialogsPageType

}

let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 15},
            {id: 2, message: "It's my first post", likeCount: 20}
        ]
    },
    dialogsPage: {
        dialogs: [
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
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'What are you doing?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},

        ]
    }
}


export default state;