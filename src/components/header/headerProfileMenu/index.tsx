import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react';
import ProfileAvatar from '@/components/profileAvatar';
import { useTranslation } from 'react-i18next';
import { useLogout } from '@/hooks/useLogout';
import useUserActions from '@/hooks/useUserActions';

const HeaderProfileMenu = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isUserLoggedIn, getUserDetails } = useUserActions();
  const user = getUserDetails();
  const logout = useLogout();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <Button onClick={toggleMenu} className="focus:outline-none">
        <ProfileAvatar image={user?.image} size={40} />
      </Button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
          {isUserLoggedIn() ? (
            <React.Fragment>
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {t('app.profile')}
              </Link>
              <Button
                onClick={logout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {t('app.logout')}
              </Button>
            </React.Fragment>
          ) : (
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {t('app.login')}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderProfileMenu;
