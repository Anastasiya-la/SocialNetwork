import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Message/Message";

type DialogsType = {
    messages: Array<MessagePropsType>
    dialogs: Array<DialogItemPropsType>
}

const Dialogs = (props: DialogsType) => {
    const newMessageElement = React.createRef<HTMLTextAreaElement>();
    const sendMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m =>
                    <Message message={m.message} id={m.id}/>
                )}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send Message</button>
            </div>

        </div>);
}
export default Dialogs;