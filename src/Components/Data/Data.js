import React, { useState } from 'react';
import './Data.css'

const Data = (props) => {
    const [getData, setGetData] = useState(" ");
    const findGetBreakData = (data) => {
        setGetData(data)
    }
    const { cart } = props;
    // console.log(cart)
    let totalTime = 0;
    for (const time of cart) {
        totalTime = totalTime + time.time;
    }


    return (
        <div className='all-data'>
            <div className='profile'>
                <img src="" alt="" />
                <div className='profile-info'>
                    <h3>Faisal Ahmed</h3>
                    <p>Gazipur,Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='body-details'>
                <div>
                    <h3>55<small>kg</small></h3>
                    <p>weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p>height</p>
                </div>
                <div>
                    <h3>20<small>yrs</small></h3>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h5 className='time-break'>Add Break</h5>
                <div className='break-button'>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>10s</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>20s</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>30s</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>40s</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>50s</button>
                </div>
            </div>
            <div>
                <h5 className='time-break'>Exercise Details</h5>
                <div>
                    <p className='exercise-detail'>Exercise Time: {totalTime}</p>
                    <p className='exercise-detail'>Break Time:    {getData}</p>
                </div>
            </div>
            <div>
                <button className='activity-button'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Data;