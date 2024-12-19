import React from 'react';

interface CartItemDetailsProps {
  title: string;
  price: number;
}

const CartItemTitle: React.FC<CartItemDetailsProps> = ({
  title,
  price,
}) => {
  return (
    <div className="ml-4 flex-1">
      <h2 className="text-lg font-semibold w-2/3">{title}</h2>
      <p className="text-gray-600 text-base">{price.toFixed(2)}€</p>
    </div>
  );
};

export default CartItemTitle;
