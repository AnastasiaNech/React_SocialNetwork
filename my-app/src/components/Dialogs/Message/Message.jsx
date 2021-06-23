import React from 'react';
import s from './Message.module.css'
import {ReactComponent as Logo}  from '../../../icon/Avatar.svg';

let newMessageElement = React.createRef();

let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);}

const Message = (props) => {
    return <div className={s.item}>
        <Logo/>
        <textarea ref = {newMessageElement}></textarea>
        <div>
            <button onClick = {addMessage}>Add message</button>
        </div>
    </div>
}
export default Message;
