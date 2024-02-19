import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services/commentsService";
import Comment from "./Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getByPostId(postId).then(({data}) => setComments(data));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <Comment comment={comment}/>)
            }
        </div>
    );
};

export default Comments;