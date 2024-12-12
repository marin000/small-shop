import { Button } from '@headlessui/react';
import React from 'react';

interface TabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  tabs: string[];
}

const TabsContainer: React.FC<TabsProps> = ({
  activeTab,
  onTabClick,
  tabs,
}) => {
  return (
    <div className="flex border-b">
      {tabs.map((tab) => (
        <Button
          key={tab}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === tab
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default TabsContainer;
