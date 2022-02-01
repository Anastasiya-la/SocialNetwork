import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}


export default DialogItem;