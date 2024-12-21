import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import { SortOption } from '@/types/sortFilter';
import _ from 'lodash';

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
 * Filters a list of products based on a search term and price range.
 *
 * @param products
 * @param searchTerm
 * @param selectedCategory
 * @param minPrice
 * @param maxPrice
 * @returns A filtered list of products.
 */
export const filterProducts = (
  products: Product[],
  searchTerm: string,
  selectedCategory: string,
  minPrice: number | '',
  maxPrice: number | ''
): Product[] => {
  return products.filter((product) => {
    const matchesSearchTerm =
      (selectedCategory && searchTerm === '') ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriceRange =
      (minPrice === '' || product.details.price >= minPrice) &&
      (maxPrice === '' || product.details.price <= maxPrice);

    return matchesSearchTerm && matchesPriceRange;
  });
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

/**
 * Handles changes to a price input field by validating and updating the state.
 * Converts the input value to a number and updates the corresponding state only if the value is valid.
 *
 * @param {string} value
 * @param {React.Dispatch<React.SetStateAction<number | ''>>} setter
 */
export const handlePriceChange = (
  value: string,
  setter: React.Dispatch<React.SetStateAction<number | ''>>
) => {
  const parsedValue = _.toNumber(value);
  if (!_.isNaN(parsedValue) || value === '') {
    setter(parsedValue);
  }
};

/**
 * Checks if the minimum quantity for an item is reached.
 *
 * @param itemQuantity
 * @param minQuantity
 *
 * @returns true if the current item quantity is either 1 or matches the minimum quantity, otherwise false.
 */
export const minQuantityReached = (
  itemQuantity: number,
  minQuantity: number
) => {
  return itemQuantity === 1 || itemQuantity === minQuantity;
};

/**
 * Formats a credit card number by adding spaces after every 4 digits.
 *
 * @param cardNumber
 *
 * @returns The formatted credit card number
 * Example: "1234 5678 9101 1121"
 */
export const formatCardNumber = (cardNumber: string) => {
  return cardNumber
    .replace(/\D/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ');
};

export const checkOutOfStock = (
  stock: number,
  minimumOrderQuantity: number,
  productInCart: CartItem | undefined
) =>
  stock < minimumOrderQuantity || productInCart?.quantity === stock;
