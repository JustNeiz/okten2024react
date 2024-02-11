import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userServices/userService";

const UserForm = () => {
    const add = (data) => {
        console.log(data);
        userService.add(data);
    }
    const addComment = (data) => {
        userService.addComment(data);
        console.log(data);
    }
    const {register, handleSubmit, } = useForm();
    return (
        <div>
            <form onSubmit={handleSubmit(add)}>
                <input type={"text"} placeholder={'name'} {...register('name')} />
                <input type={"text"} placeholder={'username'} {...register('username')}/>
                <input type={"text"} placeholder={'email'} {...register('email')}/>
                <button>Add</button>
            </form>

            <form onSubmit={handleSubmit(addComment)}>
                <input type={"text"} placeholder={'name'} {...register('name')}/>
                <input type={"text"} placeholder={'email'} {...register('email')}/>
                <input type={"text"} placeholder={'body'} {...register('body')}/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default UserForm;