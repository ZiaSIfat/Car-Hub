import React from 'react';
import './HomeReviews.css';

const HomeReviews = (props) => {
    const { name, picture, about, rating } = props.review;
    return (
        <div className='home-review'>
            <img className='m-5' src={picture} alt="" />
            <h2>Name: {name}</h2>
            <p>{about}</p>
            <p><small>Rating: {rating}</small></p>
        </div>

    );
};

export default HomeReviews;