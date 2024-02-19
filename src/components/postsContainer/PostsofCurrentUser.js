import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {useParams} from "react-router-dom";
import PostTitle from "./PostTitle";

const PostsofCurrentUser = () => {
    const param = useParams();
    const [postsOfCurrentUser, setPostsOfCurrentUser] = useState([]);
    useEffect(() => {
        postService.getByUserId(param.id).then(({data}) => setPostsOfCurrentUser(data))
    }, []);
    return (
        <div>
            {
                postsOfCurrentUser.map((post) => <PostTitle  key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsofCurrentUser;