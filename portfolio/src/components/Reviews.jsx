import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviewList = [
    { name: 'Jane Smith', review: 'Working with John was a pleasure. Highly professional and skilled.' },
    { name: 'Mike Johnson', review: 'Delivered the project on time and exceeded expectations.' },
  ];

  // Review form state
  const [form, setForm] = useState({ name: '', review: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send to Firebase
    setSubmitted(true);
    setForm({ name: '', review: '' });
  };

  return (
    <section id="reviews" className="reviews-section">
      <h2>Reviews</h2>
      <div className="reviews-container">
        {reviewList.map((review, index) => (
          <div className="review-card" key={index}>
            <p>"{review.review}"</p>
            <span>- {review.name}</span>
          </div>
        ))}
      </div>
      <div className="review-form-container">
        <h3>Leave a Review</h3>
        {submitted ? (
          <p className="review-success">Thank you for your review!</p>
        ) : (
          <form className="review-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="review"
              placeholder="Your Review"
              value={form.review}
              onChange={handleChange}
              rows={4}
              required
            />
            <button type="submit">Submit Review</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Reviews; 