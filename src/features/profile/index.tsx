import React from 'react';
import useUserStore from '@/store/userStore';
import ProfileHeader from './components/profileHeader';
import ProfileInfo from './components/profileInfo';

const Profile: React.FC = () => {
  const { user } = useUserStore((state) => state);

  return (
    <div className="w-full items-center justify-center lg:w-1/3 mx-auto py-12 px-6 mt-12">
      <ProfileHeader user={user} />
      <ProfileInfo user={user} />
    </div>
  );
};

export default Profile;
