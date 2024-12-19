import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

interface DetailsButtonProps {
  onClick: () => void;
  className?: string;
}

const DetailsButton: React.FC<DetailsButtonProps> = ({
  onClick,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <p
      onClick={onClick}
      className={clsx(
        'text-blue-300 cursor-pointer hover:underline',
        className
      )}
    >
      {t('dashboard.detailsButton')}
    </p>
  );
};

export default DetailsButton;
