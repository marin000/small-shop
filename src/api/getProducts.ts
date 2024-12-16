import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axiosInstance from './axiosInstance';
import { API_ROUTES } from './apiRoutes';
import { GetProductsParams } from '@/types/apiParams';

const getProducts = async (productParams: GetProductsParams) => {
  const { searchTerm, category, limit, skip, sortBy, order } =
    productParams;
  const url = category
    ? API_ROUTES.getProductsByCategory(
        category,
        limit,
        skip,
        sortBy,
        order
      )
    : API_ROUTES.getProducts(searchTerm, limit, skip, sortBy, order);

  const response = await axiosInstance.get(url);
  return response.data;
};

export const useGetProducts = (productParams: GetProductsParams) => {
  const { searchTerm, category, limit, skip, sortBy } = productParams;
  return useQuery({
    queryKey: ['products', searchTerm, category, limit, skip, sortBy],
    queryFn: () => getProducts(productParams),
    placeholderData: keepPreviousData,
    enabled: true,
  });
};
