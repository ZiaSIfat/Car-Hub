import React from 'react';
import './AllReviews.css';
const AllReviews = (props) => {
    const { name, about, picture } = props.review;
    return (
        <div className='review'>
            <img className='m-4' src={picture} alt="" />
            <h2>Name: {name}</h2>
            <p>{about}</p>
        </div>

    );
};

export default AllReviews;