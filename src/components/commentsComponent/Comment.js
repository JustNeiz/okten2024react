import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div className={css.Comment}>
            <p>postId: {postId}</p>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Comment;