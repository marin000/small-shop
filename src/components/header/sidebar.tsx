import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-96 bg-black text-white z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <Button onClick={toggleSidebar}>
          <XMarkIcon className="w-8 h-8 text-white" />
        </Button>
      </div>
      <nav className="flex flex-col items-center space-y-6 pt-8">
        <Link to="/" className="text-2xl" onClick={toggleSidebar}>
          {t('app.home')}
        </Link>
        <Link to="/cart" className="text-2xl" onClick={toggleSidebar}>
          {t('app.cart')}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
