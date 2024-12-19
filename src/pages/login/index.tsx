import React from 'react';
import AppLayout from '@/components/layout/appLayout';
import Header from '@/components/header';
import Login from '@/features/login';

const LoginPage: React.FC = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Main>
        <Login />
      </AppLayout.Main>
    </AppLayout>
  );
};

export default LoginPage;
