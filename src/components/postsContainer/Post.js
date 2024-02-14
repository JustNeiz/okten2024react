import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import css from './Post.module.css'
import {postsService} from "../../services/postsService";

const Post = () => {
    const [post, setPost] = useState({})
    const postId = useLocation().state.postId;
    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))

    }, []);
    const {id, userId, body, title} = post;
    return (
        <div className={css.Post}>
            <p>postId: {id}</p>
            <p>userId: {userId}</p>
            <p>body: {body}</p>
            <p>title: {title}</p>
        </div>
    );
};

export default Post;