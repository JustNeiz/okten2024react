import React from 'react';

import css from './todo.module.css'
const Todo = ({todo}) => {
    const {userId, title, completed, id} = todo;
    return (
        <div className={css.Todo}>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <p>completed: {completed}</p>
            <p>id: {id}</p>
        </div>
    );
};

export default Todo;