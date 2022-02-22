import React from "react";
import s from "./Friend.module.css"
export type FriendPropsType = {
    id: number
    src: string
    name: string
}

const Friend = (props: FriendPropsType) => {
    return (
    <div>
        {props.name}
        <img src={props.src} alt={''} className = {s.imgFriend}/>
    </div>
    )
}

export default Friend;