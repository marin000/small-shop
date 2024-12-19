import React from 'react';
import ReviewCard from '@/features/dashboard/components/cards/reviewCard';
import { useTranslation } from 'react-i18next';

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
}) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <strong>{t('dashboard.reviewTab')}</strong>
      <ul className="list-disc mt-2">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ProductReviewsTab;
