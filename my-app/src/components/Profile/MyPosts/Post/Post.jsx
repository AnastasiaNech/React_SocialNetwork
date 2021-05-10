import React from 'react';
import s from './Post.module.css';
import {ReactComponent as Logo}  from '../../../../icon/Avatar.svg';

const Post = (props) => {
    return (      
        <div className={s.item}>
            <Logo />
            <span>{props.message} </span>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
      );
}

export default Post;

