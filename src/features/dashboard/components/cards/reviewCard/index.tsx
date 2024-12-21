import React from 'react';
import { Review } from '@/types/product';
import { formatDate } from '@/utils/helper';
import BaseCard from '@/components/baseCard';

interface ProductReviewProps {
  review: Review;
}

const ReviewCard: React.FC<ProductReviewProps> = ({ review }) => {
  const { reviewerName, comment, date, rating } = review;
  return (
    <BaseCard className="mb-2">
      <div className="font-semibold text-lg">{reviewerName}</div>
      <p className="mt-2">{comment}</p>
      <p className="text-sm text-gray-500 mt-2">{formatDate(date)}</p>
      <p className="text-yellow-500 mt-2">
        {'★'.repeat(rating)} {'☆'.repeat(5 - rating)}
      </p>
    </BaseCard>
  );
};

export default ReviewCard;
