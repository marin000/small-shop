import React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';
import BaseMenu from '../baseMenu';
import { calculatePaginationRange } from '@/utils/paginationUtils';
import { useTranslation } from 'react-i18next';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  itemsPerPage: number;
  itemsPerPageOptions: number[];
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPage,
  itemsPerPageOptions,
}) => {
  const { t } = useTranslation();
  const paginationRange = calculatePaginationRange(
    currentPage,
    totalPages
  );
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className="flex justify-center items-center mt-8 mb-32">
      <div className="flex items-center space-x-2">
        <Button
          id="previous-page"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
        </Button>

        <div className="hidden sm:flex">
          {paginationRange.map((pageNum) => (
            <Button
              id="next-page"
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-4 py-2 rounded-lg ${
                pageNum === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {pageNum}
            </Button>
          ))}
        </div>

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-gray-200 disabled:opacity-50"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-700" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center space-x-4 ml-4">
        <span className="text-gray-700 flex flex-wrap items-center space-x-1">
          <span>
            {t('common.paginationFirstPart', {
              start,
            })}
          </span>
          <BaseMenu
            selectedOption={end}
            options={itemsPerPageOptions}
            onOptionSelect={onItemsPerPageChange}
          />
          <span className="flex items-center space-x-1">
            <span>
              {t('common.paginationSecondPart', {
                totalResults,
              })}
            </span>
            <span>{t('common.paginationResultTxt')}</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Pagination;
