import React from 'react';
import './HomeReviews.css';

const HomeReviews = (props) => {
    const { name, picture, about } = props.review;
    return (
        <div className='home-review'>
            <img className='m-5' src={picture} alt="" />
            <h3>{name}</h3>
            <p>{about}</p>
        </div>

    );
};

export default HomeReviews;