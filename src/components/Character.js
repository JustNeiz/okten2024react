import React from 'react';

const Character = ({member}) => {
    const {name, image} = member;
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;