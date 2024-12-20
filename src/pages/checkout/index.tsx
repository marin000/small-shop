import React from 'react';
import AppLayout from '@/components/layout/appLayout';
import Header from '@/components/header';
import Checkout from '@/features/checkout';

const CheckoutPage: React.FC = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Main>
        <Checkout />
      </AppLayout.Main>
    </AppLayout>
  );
};

export default CheckoutPage;
