import React from 'react';
import Friend, {FriendPropsType} from "./Friend/Friend";
import s from './Friends.module.css';

type FriendsPropsType = {
    friends: Array<FriendPropsType>
}

const Friends = (props: FriendsPropsType) => {
    return(
        <div className={s.friends}>
            <h3>Friends</h3>
            {props.friends.map(f => <Friend id={f.id} name={f.name} src={f.src}/>)}
        </div>
    )

}

export default Friends;