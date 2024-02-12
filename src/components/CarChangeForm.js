import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carServices";

const CarChangeForm = ({car, setAddTrigger, setListener}) => {
    const {register,
        setValue,
        reset,
        handleSubmit,
    formState: {
        errors
    }} = useForm( {mode : "onChange"})
    const change = async (elem) => {
        await carService.patch(car.id, elem);
        setAddTrigger(prev=>!prev);
        setListener(false);
    };

    return (
        <form onSubmit={handleSubmit(change)}>
            <input  type={'text'}
                   {...register('brand', {
                       required: true,
                pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message:'Only symbols'}
            })} placeholder={'Brand'}/>
            <input type={'text'} {...register('year', {
                required: true,
                min: {
                    value: 1990,
                    message: 'Minimum is 1990'
                },
                max: {
                    value: new Date().getFullYear(),
                    message: 'Maximum year is current'
                }
            })} placeholder={'Year'}/>
            <input type={'text'} {...register('price',{
                required: true,
                min: {
                    value: 0,
                    message: 'Minimum is 0'
                },
                max: {
                    value: 1_000_000,
                    message: 'Maximum prise is 1.000.000'
                }
            })} placeholder={'Price'}/>
            <button>confirm changes</button>
        </form>
    );
};

export default CarChangeForm;