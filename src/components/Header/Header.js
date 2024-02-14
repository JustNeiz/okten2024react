import React from 'react';
import {NavLink} from "react-router-dom";
import TodosPage from "../../pages/TodosPage";
import AlbumsPage from "../../pages/AlbumsPage";
import CommentsPage from "../../pages/CommentsPage";
import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'todos'}>ToDos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default Header;