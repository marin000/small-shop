import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@headlessui/react';
import useUserStore from '@/store/userStore';
import { useLogout } from '@/hooks/useLogout';
import SidebarLink from './sidebarLink';

const UserSection: React.FC<{ toggleSidebar: () => void }> = ({
  toggleSidebar,
}) => {
  const { t } = useTranslation();
  const { user } = useUserStore((state) => state);
  const logout = useLogout();

  const handleLogout = () => {
    logout();
    toggleSidebar();
  };

  return (
    <div className="flex flex-col items-center space-y-6 pt-2">
      {user.id ? (
        <React.Fragment>
          <SidebarLink
            to="/profile"
            label={t('app.profile')}
            onClick={toggleSidebar}
          />
          <Button
            className="text-2xl text-red-500"
            onClick={handleLogout}
          >
            {t('app.logout')}
          </Button>
        </React.Fragment>
      ) : (
        <SidebarLink
          to="/login"
          label={t('app.login')}
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default UserSection;
