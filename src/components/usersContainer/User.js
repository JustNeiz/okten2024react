import React from 'react';

import css from './User.module.css'
import {useNavigate} from "react-router-dom";
const User = ({user}) => {
    const navigate = useNavigate();
    const {id, name} = user;
    return (
        <div className={css.User}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <button onClick={() => navigate(`/users/${id}`)}>User details</button>
        </div>
    );
};

export default User;