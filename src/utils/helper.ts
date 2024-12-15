import { Product } from '@/types/product';

export const truncateText = (text: string, maxLength: number) => {
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  // Takes care to not cut the sentence in the middle of the word
  return lastSpaceIndex !== -1
    ? truncated.slice(0, lastSpaceIndex)
    : truncated;
};

export const formatPrice = (price: number) => {
  return `${price.toFixed(2)}€`;
};

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
