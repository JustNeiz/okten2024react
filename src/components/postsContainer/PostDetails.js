import React from 'react';

import css from './PostDetails.module.css'
const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={css.PostDetails}>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostDetails;