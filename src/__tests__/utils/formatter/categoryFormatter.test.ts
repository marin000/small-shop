import { formatCategoriesData } from '../../../utils/formatters/categoryFormatter';
import { Category } from '@/types/categories';

describe('formatCategoriesData', () => {
  test('correctly formats categories into value-label pairs', () => {
    const categories: Category[] = [
      { slug: 'electronics', name: 'Electronics' },
      { slug: 'clothing', name: 'Clothing' },
    ];

    const result = formatCategoriesData(categories);
    expect(result).toEqual([
      { value: 'electronics', label: 'Electronics' },
      { value: 'clothing', label: 'Clothing' },
    ]);
  });

  test('returns an empty array when given an empty array', () => {
    const categories: Category[] = [];
    const result = formatCategoriesData(categories);
    expect(result).toEqual([]);
  });

  test('handles single category correctly', () => {
    const categories: Category[] = [
      { slug: 'electronics', name: 'Electronics' },
    ];

    const result = formatCategoriesData(categories);
    expect(result).toEqual([
      { value: 'electronics', label: 'Electronics' },
    ]);
  });

  test('handles categories with empty values for slug or name', () => {
    const categories: Category[] = [
      { slug: '', name: 'No Slug' },
      { slug: 'no-name', name: '' },
    ];

    const result = formatCategoriesData(categories);
    expect(result).toEqual([
      { value: '', label: 'No Slug' },
      { value: 'no-name', label: '' },
    ]);
  });
});
