import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import css from './UserDetails.module.css'

const UserDetails = () => {
    const param = useParams();
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        userService.getById(param.id).then(({data}) => setCurrentUser(data));
    }, []);
    const {id, name, username, email, phone} = currentUser;
    const navigate = useNavigate();
    return (
        <div className={css.UserDetails}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <button onClick={() => navigate('postsTitle')}>Posts of current user</button>
            <Outlet/>
        </div>
    );
};

export default UserDetails;