import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import SidebarLink from './sidebarLink';
import UserSection from './userSection';

interface SidebarProps {
  isOpen: boolean;
  cartItemsLength: number;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  cartItemsLength,
  toggleSidebar,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-black text-white z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <Button onClick={toggleSidebar}>
          <XMarkIcon className="w-8 h-8 text-white" />
        </Button>
      </div>
      <nav className="flex flex-col items-center space-y-6 pt-8">
        <SidebarLink
          to="/"
          label={t('app.home')}
          onClick={toggleSidebar}
        />
        <SidebarLink
          to="/cart"
          label={t('app.cart')}
          onClick={toggleSidebar}
          hasBadge={cartItemsLength > 0}
          badgeContent={cartItemsLength}
        />
        <UserSection toggleSidebar={toggleSidebar} />
      </nav>
    </div>
  );
};

export default Sidebar;
