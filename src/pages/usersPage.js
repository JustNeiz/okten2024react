import React from 'react';
import {useLoaderData} from "react-router-dom";
import Users from "../components/usersContainer/Users";

const UsersPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export default UsersPage;