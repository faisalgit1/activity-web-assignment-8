import React from 'react';
import './Academy.css'

const Academy = ({ element, handleAddToCart }) => {
    // console.log(props.element)
    const { name, img, time, details } = element;

    return (
        <div className='elements'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='text-muted'>{details ? details.slice(0, 100) + "..." : details}</p>
            <p><strong>Time:{time}M</strong></p>
            <button onClick={() => handleAddToCart(element)} className='card-button'>Add to list</button>
        </div>
    );
};

export default Academy;