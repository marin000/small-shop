import React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

interface QuantityAdjusterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  isMinQuantityReached: boolean;
  minimumOrderQuantity?: number;
  size?: 'small' | 'normal' | 'large';
}

const iconSizeClasses = {
  small: 'h-3 w-3',
  normal: 'h-6 w-6',
  large: 'h-8 w-8',
};

const QuantityAdjuster: React.FC<QuantityAdjusterProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  isMinQuantityReached,
  minimumOrderQuantity,
  size = 'normal',
}) => {
  const { t } = useTranslation();
  const iconSize = iconSizeClasses[size];

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <Button
          onClick={onDecrease}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
          disabled={isMinQuantityReached}
        >
          <MinusIcon className={`${iconSize} text-gray-700`} />
        </Button>

        <span className="text-lg font-semibold">{quantity}</span>

        <Button
          onClick={onIncrease}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          <PlusIcon className={`${iconSize} text-gray-700`} />
        </Button>
      </div>

      {isMinQuantityReached && minimumOrderQuantity && (
        <p className="text-xs text-gray-500 mt-1">
          {t('cart.minimumOrder')}
          {minimumOrderQuantity}
        </p>
      )}
    </div>
  );
};

export default QuantityAdjuster;
