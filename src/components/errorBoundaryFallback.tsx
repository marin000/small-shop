import React, { useEffect, useState } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ErrorBoundaryFallback: React.FC<FallbackProps> = ({
  error,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/');
    }
  }, [secondsLeft, navigate]);

  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center h-screen text-center"
    >
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        {t('errorBoundary.title')}
      </h1>
      <p className="text-lg text-gray-700 mb-2">
        {error?.message || t('errorBoundary.defaultMesssage')}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        {t('errorBoundary.timerNotice', {
          secondsLeft,
        })}
        {secondsLeft > 1 ? 's' : ''}...
      </p>
    </div>
  );
};

export default ErrorBoundaryFallback;
