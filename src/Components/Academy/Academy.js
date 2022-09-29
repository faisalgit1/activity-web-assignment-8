import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={() => handleAddToCart(element)} className='card-button'>Add to list <FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Academy;