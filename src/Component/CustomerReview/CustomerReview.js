import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const CustomerReview = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="customer-review">
        <h1>Customers Reviews</h1>
        {reviews.map((review) => (
          <Review key={review.id} 
          review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
