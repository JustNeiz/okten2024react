import React, {useRef, useState} from 'react';
import {carService} from "../services/carServices";
import {url} from "../constants/urls";
import CarForm from "./CarForm";
import {useForm} from "react-hook-form";
import CarChangeForm from "./CarChangeForm";


const Car = ({car, setAddTrigger}) => {
    const {brand, price, year} = car;
    const {register, formState : { isSubmitted}} = useForm()
    const deleteCar = async () => {
        await carService.delete(car.id);
        setAddTrigger(prev => !prev);
    }
    const [listener, setListener] = useState(false);
    const build = () => {
        setListener(true);
    }
    return (
        <div>
            <p>Brand: {brand}</p>
            <p>Year: {year}</p>
            <p>Price:{price}</p>
            <button onClick={build} >Change
            </button>
            {listener&&<CarChangeForm setListener={setListener} car={car} setAddTrigger={setAddTrigger}/>}

            <button onClick={deleteCar}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;