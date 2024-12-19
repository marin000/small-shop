import { Button } from '@headlessui/react';
import clsx from 'clsx';
import React, { Ref } from 'react';

type ButtonProps = {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?:
    | 'primary'
    | 'danger'
    | 'success'
    | 'transparent'
    | 'white'
    | 'black';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
};

const BaseButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  ref,
  className = '',
  iconStart,
  iconEnd,
  ...rest
}) => {
  const variants = {
    primary: `text-white bg-primary-300 hover:bg-primary-500`,
    danger: `text-white bg-danger-500 hover:bg-danger-700`,
    success: `text-white bg-green-500 hover:bg-green-700`,
    transparent: `bg-transparent`,
    white: `text-black bg-white border border-gray-300 hover:bg-gray-100`,
    black: `text-white bg-black hover:bg-gray-900`,
  };

  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <Button
      ref={ref}
      type={type}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'inline-flex items-center justify-center font-semibold rounded-full data-[hover]:cursor-pointer focus:outline-none shadow-md',
        sizes[size],
        variants[variant],
        disabled && 'data-[disabled]:bg-gray-600',
        className
      )}
      {...rest}
    >
      {iconStart && <span className="mr-2">{iconStart}</span>} {label}
      {iconEnd && <span className="ml-2">{iconEnd}</span>}
    </Button>
  );
};

export default BaseButton;
