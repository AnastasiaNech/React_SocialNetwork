import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map (d => <DialogItems name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map (m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    { messageElements }
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
