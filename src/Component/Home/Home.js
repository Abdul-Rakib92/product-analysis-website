import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <section className='home-container'>
                <div className='container-detail'>
                    <h1>Your Next Laptop</h1>
                    <h2><span className='text'>MacBook Pro 14-inch and MacBook Pro 16-inch</span></h2>
                    <p>With groundbreaking performance and amazing battery life, this Apple MacBook Pro is a beast. It's built with a blazing-fast M1 Pro chip that's designed for pros, with a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.</p>

                </div>

                <div>
                    <img src={'https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7e24a1f6cc60b32f/616e15184b29bc77aaa9707d/computing-20211018-feature-fg-macbook-pro-m.png?width=150p&quality=80&auto=webp'} alt="" />

                </div>
            </section>
            <br />
            <br />
            <br />
            
            <section className='review-container'>
                <div>
                    <h1>Customer Reviews</h1>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;