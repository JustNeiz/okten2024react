import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
const Client = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Client;