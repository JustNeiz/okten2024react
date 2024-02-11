import React, {useRef} from 'react';


const Car = ({car}) => {
    const {brand, price, year} = car;
    return (
        <div>
            <p>Brand: {brand}</p>
            <p>Year: {year}</p>
            <p>Price:{price}</p>
            <button>Change</button>
            <button>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;