import { Product } from '@/types/product';
import { SortOption } from '@/types/sortFilter';

/**
 * Truncates a given text to a specified maximum length.
 * The text is truncated at the last space to avoid cutting a word in half.
 *
 * @param text
 * @param maxLength
 * @returns The truncated text.
 */
export const truncateText = (text: string, maxLength: number) => {
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  return lastSpaceIndex !== -1
    ? truncated.slice(0, lastSpaceIndex)
    : truncated;
};

/**
 * Formats a given price number to a string with two decimal places and a '€' symbol.
 *
 * @param price
 * @returns The formatted price as a string.
 */
export const formatPrice = (price: number) => {
  return `${price.toFixed(2)}€`;
};

/**
 * Formats a given date string to the 'en-GB' locale format (DD/MM/YYYY),
 * considering the local timezone.
 *
 * @param dateString
 * @returns The formatted date string.
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return date.toLocaleDateString('en-GB', {
    timeZone: timezone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

/**
 * Filters a list of products based on a search term and a selected category.
 *
 * @param products
 * @param searchTerm
 * @param selectedCategory
 * @returns A filtered list of products.
 */
export const filterProducts = (
  products: Product[],
  searchTerm: string,
  selectedCategory: string
): Product[] => {
  return selectedCategory && searchTerm
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;
};

/**
 * Determines the button variant for sorting options based on the current active sort criteria.
 *
 * @param sort - ('price' or 'title')
 * @param order
 * @param activeSort
 * @returns The variant ('primary' or 'white')
 */
export const getButtonVariant = (
  sort: string,
  order: 'asc' | 'desc',
  activeSort: SortOption
) => {
  return activeSort.sortBy === sort && activeSort.order === order
    ? 'primary'
    : 'white';
};
