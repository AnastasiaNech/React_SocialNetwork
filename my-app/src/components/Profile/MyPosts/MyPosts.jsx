import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements =
        props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }
    return (
        <div className={s.content}>
            <h3>My post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref = {newPostElement} value= {props.newPostText}/>
                </div>
                <div>
                    <button onClick = {addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;

