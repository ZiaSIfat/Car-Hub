import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=' d-flex row not-found-container'>
            <div className='col-lg-6'>
                <img src="https://cdn5.vectorstock.com/i/1000x1000/24/54/404-not-found-concept-glitch-style-vector-17612454.jpg" alt="" />
            </div>
            <div className='not-found col-lg-6'>
                <h2>404 page not found</h2>
                <p>The page you are trying to search is not available</p>
            </div>
        </div>
    );
};

export default NotFound;