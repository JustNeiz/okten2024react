import React from 'react';

import css from './Album.module.css'
const Album = ({album}) => {
    const {userId, title}= album
    return (
        <div className={css.Album}>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
        </div>
    );
};

export default Album;