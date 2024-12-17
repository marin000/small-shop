import React from 'react';
import AppLayout from '@/components/layout/appLayout';
import Cart from '@/features/cart';
import Header from '@/components/header';

const CartPage: React.FC = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Main>
        <Cart />
      </AppLayout.Main>
    </AppLayout>
  );
};

export default CartPage;
