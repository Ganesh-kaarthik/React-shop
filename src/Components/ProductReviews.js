import React from 'react';

const ProductReviews = ({ reviews }) => {
  return (
    <div>
      {reviews ? (
        <div class="d-flex justify-content-center small text-warning mb-2">
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
          <div class="bi-star-fill"></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default ProductReviews;
