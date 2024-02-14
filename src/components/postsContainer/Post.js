import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postsService} from "../../services/postsService";

const Post = () => {
    const [post, setPost] = useState({})
    const postId = useLocation().state.postId;
    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data))

    }, []);
    console.log(post);
    return (
        <div>
            iuhaijn
        </div>
    );
};

export default Post;