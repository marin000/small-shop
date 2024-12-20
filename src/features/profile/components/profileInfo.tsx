import BaseCard from '@/components/baseCard';
import { BaseUserData } from '@/types/user';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileDetail from './profileDetails';

interface ProfileCardProps {
  user: BaseUserData;
}

const ProfileInfo: React.FC<ProfileCardProps> = ({ user }) => {
  const { t } = useTranslation();
  const { firstName, lastName, username, email } = user;

  return (
    <BaseCard className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">
        {t('profile.title')}
      </h3>
      <ul className="space-y-3">
        <ProfileDetail
          label={t('profile.username')}
          value={username}
        />
        <ProfileDetail
          label={t('profile.firstName')}
          value={firstName}
        />
        <ProfileDetail
          label={t('profile.lastName')}
          value={lastName}
        />
        <ProfileDetail label={t('profile.email')} value={email} />
      </ul>
    </BaseCard>
  );
};

export default ProfileInfo;
