import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import css from './Comment.module.css'
const Comment = ({comment}) => {
    const navigate = useNavigate()
    const {id, email, name, body, postId} = comment
    return (
        <div className={css.Comment}>
            <p>id: {id}</p>
            <p>email: {email}</p>
            <p>name: {name}</p>
            <p>body: {body}</p>
            <button onClick={() => {
                navigate('root_post', {state: {postId: postId}});
            }}>View root post</button>


        </div>
    );
};

export default Comment;