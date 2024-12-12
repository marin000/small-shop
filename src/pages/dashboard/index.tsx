import React from 'react';
import Products from '@/features/products';
import AppLayout from '@/components/layout/appLayout';
import Header from '@/components/header';

const DashboardPage: React.FC = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Main>
        <Products />
      </AppLayout.Main>
    </AppLayout>
  );
};

export default DashboardPage;
