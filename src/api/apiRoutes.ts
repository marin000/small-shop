export const API_ROUTES = {
  getProducts: (limit: number, skip: number) =>
    `/products?limit=${limit}&skip=${skip}`,
  getProductsByCategory: (
    category: string,
    limit: number,
    skip: number
  ) => `/products/category/${category}/?limit=${limit}&skip=${skip}`,
  getCategories: '/products/categories',
};
