import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carServices";

const CarForm = ({setAddTrigger}) => {
    const {register,
        handleSubmit,
        reset,
        formState: {isValid, errors}} = useForm({
        mode: "onChange"
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
                       {...register('brand',
                    {required: true,
                            pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message:'Only symbols'}})}
                       placeholder={'Brand'}/>
                <input type={'text'}
                       {...register('year',
                    {valueAsNumber: true,
                             required: true,
                            min: {value: 1990, message: 'Minimum year is 1990'},
                            max: {value: new Date().getFullYear(), message:'Maximum year is current'},
                            pattern: /^[0-9]*$/})}
                       placeholder={'Year'}/>
                <input type={'text'}
                       {...register('price',
                           {required: true,
                           valueAsNumber: true,
                           min: {value: 0, message:'Minimum price is 0'},
                           max: {value: 1_000_000, message: 'Maximum price is 1 000 000'},
                               pattern: /^[0-9]*$/ })}
                       placeholder={'Price'}/>
                <button disabled={!isValid}>Add</button>
                {errors.year&&<p>{errors.year.message}</p>}
                {errors.price&&<p>{errors.price.message}</p>}
            </form>
        </div>
    );
};

export default CarForm;