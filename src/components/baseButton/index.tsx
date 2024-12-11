import { Button } from '@headlessui/react';
import clsx from 'clsx';
import React, { Ref } from 'react';

type ButtonProps = {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'danger' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
};

const BaseButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  ref,
  className = '',
  ...rest
}) => {
  const variants = {
    primary: `text-white bg-primary-500 hover:bg-primary-700`,
    danger: `text-white bg-danger-500 hover:bg-danger-700`,
    success: `text-white bg-green-500 hover:bg-green-700`,
    transparent: `bg-transparent`,
  };

  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <Button
      ref={ref}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center font-semibold rounded-full data-[hover]:cursor-pointer focus:outline-none',
        sizes[size],
        variants[variant],
        disabled && 'data-[disabled]:bg-gray-600',
        className
      )}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default BaseButton;
