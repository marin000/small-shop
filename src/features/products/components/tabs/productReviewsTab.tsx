import ReviewCard from '@/features/products/components/cards/reviewCard';
import React from 'react';

interface Review {
  reviewerName: string;
  comment: string;
  date: string;
  rating: number;
}

interface ReviewsTabProps {
  reviews: Review[];
}

const ProductReviewsTab: React.FC<ReviewsTabProps> = ({
  reviews,
}) => (
  <React.Fragment>
    <strong>Reviews:</strong>
    <ul className="list-disc mt-2">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </ul>
  </React.Fragment>
);

export default ProductReviewsTab;
