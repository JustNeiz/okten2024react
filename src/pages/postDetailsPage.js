import React from 'react';
import {useLocation} from "react-router-dom";
import PostDetails from "../components/postsContainer/PostDetails";
import Comments from "../components/commentsComponent/Comments";

const PostDetailsPage = () => {
    const {state: {post}} = useLocation();
    console.log(post);

    return (
        <div>
            <h2>Post Details</h2>
            <PostDetails post={post}/>
            <hr/>
            <h2>Comments</h2>
            <Comments postId={post.id}/>
        </div>
    );
};

export default PostDetailsPage;