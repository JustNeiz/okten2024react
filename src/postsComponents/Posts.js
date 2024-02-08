import React, {useEffect, useState} from 'react';
import {postServiceMain} from "../postServices/postServiceMain";
import Post from "./Post";
import PostDetails from "./PostDetails";
import css from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [details, setDetails] = useState(null);
    useEffect(() => {
        postServiceMain.getBase().then(({data}) => setPosts(data))
    }, []);
    const getCurrentPost = (post) => {
            setDetails(post);
    }
    return (
        <div className={css.Posts}>
            <div>{posts.map((post) =>
            <Post post={post} key={post.id} getCurrentPost={getCurrentPost}/>
            )}
            </div>
            {details && <PostDetails post={details}/>}
        </div>
    );
};
export default Posts;