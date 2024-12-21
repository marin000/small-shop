import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import logo from '@/assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { Button } from '@headlessui/react';
import Sidebar from './sidebar';
import useCartStore from '@/store/cartStore';
import HeaderProfileMenu from './headerProfileMenu';

const Header = () => {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItems } = useCartStore((state) => state);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="z-40 py-4 px-4 bg-black flex items-center justify-between">
      <Button
        className="md:hidden text-white"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="w-8 h-8" />
      </Button>

      <Link
        to="/"
        className="hidden md:flex items-center space-x-4 ml-4"
      >
        <HomeIcon className="w-8 h-8 text-white" />
      </Link>
      <Link
        to="/"
        className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
      >
        <img src={logo} alt="app logo" className="w-20 h-12" />
        <span className="text-white text-2xl font-semibold ml-4 whitespace-nowrap">
          {t('app.name')}
        </span>
      </Link>
      <div className="flex items-center space-x-8">
        <Link
          to="/cart"
          className="text-white hidden md:flex relative"
        >
          <ShoppingCartIcon className="w-8 h-8" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
        <div className="hidden md:block">
          <HeaderProfileMenu />
        </div>
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        cartItemsLength={cartItems.length}
        toggleSidebar={toggleSidebar}
      />
    </header>
  );
};

export default Header;
