export const API_ROUTES = {
  getProducts: (
    searchTerm: string,
    limit: number,
    skip: number,
    sortBy: string,
    order: string
  ) =>
    `/products/search?q=${searchTerm}&&limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`,
  getProductsByCategory: (
    category: string,
    limit: number,
    skip: number,
    sortBy: string,
    order: string
  ) =>
    `/products/category/${category}/?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`,
  getCategories: '/products/categories',
  login: '/auth/login',
};
