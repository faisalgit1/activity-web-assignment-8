import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Activity = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        < div className='activity-container'>


        </div >
    );
};

export default Activity;