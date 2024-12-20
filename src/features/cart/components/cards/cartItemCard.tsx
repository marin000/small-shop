import React, { useState } from 'react';
import { CartItem } from '@/types/cart';
import { formatPrice, minQuantityReached } from '@/utils/helper';
import BaseCard from '@/components/baseCard';
import { useTranslation } from 'react-i18next';
import BaseThumbnail from '@/components/baseThumbnail';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import BaseButton from '@/components/baseButton';
import { useToastContext } from '@/providers/toastContext';
import CartItemTitle from '../cartItemTitle';
import DetailsLink from '@/features/shared/detailsLink';
import ProductDialog from '@/features/shared/productDialog';
import QuantityAdjuster from '@/features/shared/quantityAdjuster';

interface CartItemProps {
  item: CartItem;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItemCard: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    title,
    quantity,
    thumbnail,
    details: { stock, price, minimumOrderQuantity },
  } = item;

  const handleIncrease = () => {
    if (quantity + 1 <= stock) onUpdateQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) onUpdateQuantity(quantity - 1);
  };

  const handleRemove = () => {
    onRemove();
    showToast(
      t('toast.dashboard.removedToCartTitle'),
      t('toast.dashboard.removedToCartMsg'),
      'info'
    );
  };

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const isMinQuantityReached = minQuantityReached(
    quantity,
    minimumOrderQuantity
  );
  const itemsLeft = stock - quantity;

  return (
    <BaseCard className="relative hover:shadow-lg transition mb-4 w-full max-w-full sm:max-w-4xl  min-w-[20rem]">
      <div className="flex items-center">
        <BaseThumbnail
          title={title}
          thumbnail={thumbnail}
          className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 object-contain sm:object-cover md:object-cover rounded"
        />
        <CartItemTitle title={title} price={price} />
        <QuantityAdjuster
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          isMinQuantityReached={isMinQuantityReached}
          minimumOrderQuantity={minimumOrderQuantity}
        />
      </div>

      <div className="mt-4 ml-4 text-sm text-gray-600">
        <p>{t('cart.stockItemsLeft', { itemsLeft })}</p>
      </div>

      <DetailsLink
        onClick={toggleDialog}
        className="absolute bottom-4 left-8"
      />

      <div className="mt-2 text-right">
        <p className="font-semibold text-lg mb-2">
          {t('cart.totalPrice')}
          {formatPrice(price * quantity)}
        </p>
        <BaseButton
          label={t('cart.removeFromCart')}
          size="small"
          variant="danger"
          iconEnd={<ShoppingCartIcon className="w-5 h-5" />}
          onClick={handleRemove}
        />
      </div>

      <ProductDialog
        product={item}
        isOpen={isDialogOpen}
        onClose={toggleDialog}
      />
    </BaseCard>
  );
};

export default CartItemCard;
