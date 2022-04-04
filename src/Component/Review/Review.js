import React from 'react';
import './Review.css';

const Review = (props) => {
    
    const {name, description, rating } = props.review;

    return (
        <div className='review'>
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>{rating}star</h5>
            
        </div>
    );
};

export default Review;