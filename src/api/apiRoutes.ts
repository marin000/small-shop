export const API_ROUTES = {
  getProducts: (searchTerm: string, limit: number, skip: number) =>
    `/products/search?q=${searchTerm}&&limit=${limit}&skip=${skip}`,
  getProductsByCategory: (
    category: string,
    limit: number,
    skip: number
  ) => `/products/category/${category}/?limit=${limit}&skip=${skip}`,
  getCategories: '/products/categories',
};
