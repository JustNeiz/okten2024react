import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carServices";

const CarForm = () => {
    const {register,
        handleSubmit,
        reset,
        formState} = useForm()


    return (
        <div>
            <form onSubmit={handleSubmit(carService.add(car))}>
                <input type={'text'} {...register('brand')} placeholder={'Brand'}/>
                <input type={'text'} {...register('year')} placeholder={'Year'}/>
                <input type={'text'} {...register('price')} placeholder={'Price'}/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default CarForm;