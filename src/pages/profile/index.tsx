import React from 'react';
import AppLayout from '@/components/layout/appLayout';
import Header from '@/components/header';
import Profile from '@/features/profile';

const ProfilePage: React.FC = () => {
  return (
    <AppLayout>
      <AppLayout.Header>
        <Header />
      </AppLayout.Header>
      <AppLayout.Main>
        <Profile />
      </AppLayout.Main>
    </AppLayout>
  );
};

export default ProfilePage;
