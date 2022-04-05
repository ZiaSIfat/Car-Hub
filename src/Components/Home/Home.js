import React from 'react';
import useReview from '../../Hook/useReview';
import HomeReviews from '../HomeReviews/HomeReviews';
import './Home.css';
const Home = () => {
    const [reviews, setreviews] = useReview();
    const homeReview = reviews.slice(0, 3);
    return (
        <div className='row mt-5'>
            <div className='heading-container col-6'>
                <h1 className='heading'>Car Hub</h1>
                <p><small className='small'>Choose your car wisely</small></p>
            </div>
            <div className='img-container col-6'>
                <img src="https://i.dawn.com/primary/2021/04/608a34915c3f9.jpg" alt="" />
            </div>
            <div className='mt-5 review-container'>
                <h2>Customers Review</h2>

                {
                    homeReview.map(review => <HomeReviews
                        key={review.id}
                        review={review}
                    ></HomeReviews>)
                }
                <button className='all-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;