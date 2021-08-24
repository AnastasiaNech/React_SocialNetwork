import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogElements = state.dialogs.map (d => <DialogItems id={d.id} name={d.name} />);
    let messageElements = state.messages.map (m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogElements}
            </div>
            <div className={s.messages}>
               <div>{messageElements}</div>
                <div>
                    <textarea value = {newMessageBody}
                                onChange={onNewMessageChange}>
                    </textarea></div>
                <div><button onClick = {onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;
