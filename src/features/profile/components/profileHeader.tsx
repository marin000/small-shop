import React from 'react';
import ProfileAvatar from '@/components/profileAvatar';
import { BaseUserData } from '@/types/user';

interface ProfileHeaderProps {
  user: BaseUserData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  const { firstName, lastName, image, email } = user;
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-6">
        <ProfileAvatar image={image} size={60} />
        <div>
          <h2 className="text-2xl font-semibold">{`${firstName} ${lastName}`}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
