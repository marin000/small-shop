import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface BaseDropdownProps {
  label?: string;
  id?: string;
  name?: string;
  className?: string;
  options: { value: string; label: string }[];
  selectedItem: string;
  onChange: (value: string) => void;
}

const BaseDropdown: React.FC<BaseDropdownProps> = ({
  id,
  name,
  className,
  options,
  selectedItem,
  onChange,
}) => {
  return (
    <React.Fragment>
      <Menu
        id={id}
        refName={name}
        as="div"
        className={clsx(
          'relative inline-block text-left z-50',
          className
        )}
      >
        <MenuButton className="px-2 py-2 bg-white border rounded-md flex justify-between items-center w-72">
          <span>{selectedItem}</span>
          <ChevronDownIcon className="h-6 w-8 text-gray-500" />
        </MenuButton>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 w-full mt-2 origin-top-right bg-white border rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {options.map((option) => (
                <MenuItem key={option.value}>
                  <button
                    onClick={() => onChange(option.value)}
                    className="block px-4 py-2 text-sm w-full text-left text-gray-700"
                  >
                    {option.label}
                  </button>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </React.Fragment>
  );
};

export default BaseDropdown;
