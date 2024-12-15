import React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

interface BaseMenuProps {
  selectedOption: number;
  options: number[];
  onOptionSelect: (option: number) => void;
}

const BaseMenu: React.FC<BaseMenuProps> = ({
  selectedOption,
  options,
  onOptionSelect,
}) => {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="p-2 border rounded bg-gray-200 flex items-center space-x-2">
        <span>{selectedOption}</span>
        <ChevronDownIcon className="h-5 w-5 text-gray-700" />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-16 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <MenuItem key={option} as="div">
                {({}) => (
                  <Button
                    onClick={() => onOptionSelect(option)}
                    className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                  >
                    {option}
                  </Button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default BaseMenu;
