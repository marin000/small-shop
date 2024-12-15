import React from 'react';
import AppLayout from '@/components/layout/appLayout';
import Header from '@/components/header';
import Dashboard from '@/features/dashboard';

const DashboardPage: React.FC = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Main>
        <Dashboard />
      </AppLayout.Main>
    </AppLayout>
  );
};

export default DashboardPage;
