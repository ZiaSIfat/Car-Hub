import React from 'react';
import CardReview from '../AllReviews/AllReviews';
import useReview from '../../Hook/useReview';

const ReviewCart = (props) => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='mt-4'>
            <h2>All Reviews</h2>
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