import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import img from "./Images/my-bg2.png"
import './Data.css'
import { useEffect } from 'react';
// import { useEffect, useState } from 'react';


const Data = (props) => {
    const [getData, setGetData] = useState(" ");
    const [times, setTimes] = useState(0)

    useEffect(() => {
        const getSpentTime = localStorage.getItem('spent-time')
        if (getSpentTime) {
            setTimes(getSpentTime)
        }
    }, [])
    const findGetBreakData = (data) => {
        setGetData(data)
        const getDataTime = parseFloat(times) + parseFloat(data)
        setTimes(getDataTime)
        localStorage.setItem('spent-time', getDataTime)
    }
    const { cart } = props;
    // console.log(cart)
    let totalTime = 0;
    for (const time of cart) {
        totalTime = totalTime + time.time;
    }





    //   const handleGetTimes=(time)=>{
    //     const getDataTime=parseFloat(times) + parseFloat(time)
    //     setTimes(getDataTime)
    //     localStorage.setItem('spent-time',getDataTime)
    //   }


    const notify = () => toast("Wow so easy! Your Activity Done");
    return (
        <div className='all-data'>
            <div className='profile'>
                <img src={img} alt="" />
                <div className='profile-info'>
                    <h3>Faisal Ahmed</h3>
                    <p> <FontAwesomeIcon icon={faLocationDot} />  Gazipur,Dhaka,</p>
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
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>10M</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>20M</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>30M</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>40M</button>
                    <button onClick={(e) => findGetBreakData(e.target.innerText)}>50M</button>
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
                <button onClick={notify} className='activity-button'>Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Data;