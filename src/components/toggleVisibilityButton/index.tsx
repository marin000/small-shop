import React from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Button } from '@headlessui/react';

interface ToggleVisibilityButtonProps {
  showPassword: boolean;
  toggleShowPassword: () => void;
}

const ToggleVisibilityButton: React.FC<
  ToggleVisibilityButtonProps
> = ({ showPassword, toggleShowPassword }) => (
  <Button
    type="button"
    aria-label={showPassword ? 'Hide password' : 'Show password'}
    onClick={toggleShowPassword}
    className="absolute inset-y-0.5 right-0.5 flex items-center px-3 text-gray-600 bg-gray-100 rounded-lg"
  >
    {showPassword ? (
      <EyeSlashIcon className="w-5 h-5 text-black" />
    ) : (
      <EyeIcon className="w-5 h-5 text-black" />
    )}
  </Button>
);

export default ToggleVisibilityButton;
