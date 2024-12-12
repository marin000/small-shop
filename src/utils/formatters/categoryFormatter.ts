import { Category } from '@/types/categories';

export const formatCategoriesData = (categories: Category[]) => {
  return categories.map((category: Category) => ({
    value: category.slug,
    label: category.name,
  }));
};
