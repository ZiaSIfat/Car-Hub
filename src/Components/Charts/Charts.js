import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Charts.css';


const Charts = () => {
    return (
        <div className='d-flex row'>
            <div className='col-lg-6 ps-5'>
                <h1 className='chart'>Month Wise Sell</h1>
                <MyLineChart></MyLineChart>
            </div>
            <div className='col-lg-6'>
                <h1 className='chart'>Investment Vs Revenue</h1>
                <MyAreaChart></MyAreaChart>
            </div>

        </div>
    );
};

export default Charts;