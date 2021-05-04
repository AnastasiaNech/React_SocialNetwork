import React from 'react';
import s from './Dialogs.module.css'


const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Nastia' },
        { id: 2, name: 'Rost' },
        { id: 3, name: 'Nadia' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'HALLO!' },
        { id: 3, message: 'Hello!' }
    ]

    let dialogElements = dialogs.map
        (d => <DialogItems name={d.name} id={d.id} />);

    let messageElements = messages.map
        (m => <Message message={m.message} id={m.id} />);

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
