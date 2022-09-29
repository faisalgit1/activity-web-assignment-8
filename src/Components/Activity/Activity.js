import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   import { faBaseball } from '@fortawesome/free-solid-svg-icons';
import './Activity.css'

import Academy from '../Academy/Academy';
import Data from '../Data/Data';

const Home = () => {
    const [elements, setElements] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setElements(data))
    }, [])

    const handleAddToCart = (element) => {
        // console.log(element)
        const newCart = [...cart, element];
        setCart(newCart);
    }

    return (
        <div className='home-component'>
            <div>
                <div className='allCart-container'>
                    {/* <FontAwesomeIcon className='icon-title' icon={faBaseball}></FontAwesomeIcon> */}
                    <h1>MY FAVOURITES ACTIVITY</h1>
                </div>
                <div className='all-card'>
                    {
                        elements.map(element => <Academy
                            key={element.id}
                            element={element}
                            handleAddToCart={handleAddToCart}
                        ></Academy>)
                    }
                </div>
            </div>
            <div className='data-container'>
                <Data
                    cart={cart}
                ></Data>
            </div>
        </div>
    );
};

export default Home;