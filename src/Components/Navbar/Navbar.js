import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <h1><FontAwesomeIcon icon={faHand} /> My-Favourites-Activity</h1>
        </div>
    );
};

export default Navbar;