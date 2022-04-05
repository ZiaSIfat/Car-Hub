import React from 'react';
import CardReview from '../AllReviews/AllReviews';
import useReview from '../../Hook/useReview';
import './ReviewCart.css';
const ReviewCart = (props) => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='mt-4'>
            <h1 className='review-heading'>All Reviews</h1>
            {
                reviews.map(review => <CardReview
                    key={review.id}
                    review={review}
                ></CardReview>)
            }
        </div>
    );
};



export default ReviewCart;