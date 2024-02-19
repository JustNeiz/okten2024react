import React from 'react';

import css from './PostTitle.module.css'
import {useNavigate} from "react-router-dom";

const PostTitle = ({post}) => {
    const navigate = useNavigate();
    const {title, id} = post;
    return (
        <div className={css.PostTitle}>
            <p>title: {title}</p>
            <button onClick={() => navigate(`/posts/${id}/comments`, {state:{post}})}>Post details</button>
        </div>
    );
};

export default PostTitle;