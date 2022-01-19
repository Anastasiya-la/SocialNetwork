import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) =>{
    return(
        <div>
        <div className = {s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
        </div>
    );
}

const Message: React.FC <MessagePropsType> = (props) => {
    return (<div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className = {s.dialogs}>
           <div className = {s.dialogsItems}>
               <DialogItem name = {'Veronika'} id = {1}/>
               <DialogItem name = {'Varvara'} id = {2}/>
               <DialogItem name = {'Sasha'} id = {3}/>
               <DialogItem name = {'Katya'} id = {4}/>
               <DialogItem name = {'Liza'} id = {5}/>
           </div>
            <div className = {s.messages}>
                <Message message = {'Hi'} />
                <Message message = {'What are you doing?'} />
                <Message message = {'Yo'} />
            </div>

        </div>);
}
export default Dialogs;