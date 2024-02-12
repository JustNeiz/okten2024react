import React, {useEffect, useState} from 'react';
import {carService} from "../services/carServices";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    const [addTrigger, setAddTrigger] = useState(null)
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [addTrigger]);
    return (
        <div>
            <CarForm setAddTrigger={setAddTrigger}/>
            {cars.map(car => <Car setAddTrigger={setAddTrigger} car={car} key={car.id}/>)}
        </div>
    );
};

export default Cars;
