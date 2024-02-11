import React, {useEffect, useState} from 'react';
import {carService} from "../services/carServices";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);
    return (
        <div>
            <CarForm/>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export default Cars;