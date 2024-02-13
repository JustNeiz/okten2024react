import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../services/carServices";
import {carValidator} from "../Validator/CarValidator";

const CarForm = ({setAddTrigger}) => {
    const {register,
        handleSubmit,
        reset,
        formState: {isValid, errors}} = useForm({
        mode: "onChange",
        resolver: joiResolver(carValidator)

    })

    const push = (car) =>{
        carService.add(car)
        setAddTrigger(prev => !prev);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(push)} >
                <input type={'text'}
                       {...register('brand')}
                       placeholder={'Brand'}/>
                <input type={'text'}
                       {...register('year',
                    {valueAsNumber: true})}
                       placeholder={'Year'}/>
                <input type={'text'}
                       {...register('price',
                           {valueAsNumber: true})}
                       placeholder={'Price'}/>
                <button disabled={!isValid}>Add</button>
                {errors.brand&&<p>{errors.brand.message}</p>}
                {errors.year&&<p>{errors.year.message}</p>}
                {errors.price&&<p>{errors.price.message}</p>}
            </form>
        </div>
    );
};

export default CarForm;