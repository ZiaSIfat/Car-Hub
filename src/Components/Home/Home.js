import React from 'react';
import { Link } from 'react-router-dom';
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
                <p className='heading-para ps-3'>Car is a classy way to express yourself.And it will gonna be a big part of your life for a big time.So before you wanna buy a car think twice before you buy it.</p>
                <p><small className='small'>Choose your car wisely</small></p>
            </div>
            <div className='img-container col-6'>
                <img src="https://i.dawn.com/primary/2021/04/608a34915c3f9.jpg" alt="" />
            </div>
            <div className='mt-5 review-container'>
                <h1>Customers Review</h1>

                {
                    homeReview.map(review => <HomeReviews
                        key={review.id}
                        review={review}
                    ></HomeReviews>)
                }
                <Link to='/review'>
                    <button className='all-btn'>See all reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;