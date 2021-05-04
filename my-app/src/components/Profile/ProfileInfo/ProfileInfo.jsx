import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='http://mebel69.org/08/239.jpg'/>
            </div>
            <div className={s.discriptionBlock}>
                ava+disc
            </div>
        </div>
    );
}

export default ProfileInfo;
