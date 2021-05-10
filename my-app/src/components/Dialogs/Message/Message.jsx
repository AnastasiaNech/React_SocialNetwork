import React from 'react';
import s from './Message.module.css'
import {ReactComponent as Logo}  from '../../../icon/Avatar.svg';

const Message = (props) => {
    return <div className={s.item}>
        <Logo/>
        <div className={s.message}>{props.message}</div>
    </div>
}
export default Message;
