import React from 'react';
import PostDetails from "./PostDetails";
import postDetails from "./PostDetails";

const Post = ({post, getCurrentPost}) => {
    return (
        <div>
            <h2>post: {post.id}</h2>
            <h2>title: {post.title}</h2>
            <button onClick={() => getCurrentPost(post)}>View info</button>
        </div>
    );
};

export default Post;