import React from 'react';
const PostDetails = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <p>User ID: {userId}</p>
            <p>Post ID: {id}</p>
            <p>Title: {title}</p>
            <p>Post: {body}</p>
        </div>
    );
};

export default PostDetails;