import React from 'react';
import { useGetProducts } from '../../api/getProducts';
import LoadingSpinner from '../../components/loadingSpinner';

const Products: React.FC = () => {
  const { data, isLoading: loading, isError } = useGetProducts();

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner width="80" height="80" />
        </div>
      ) : (
        <div
          className="text-right size-16 font-bold"
          style={{ color: 'black' }}
        >
          Hello world!
        </div>
      )}
    </div>
  );
};

export default Products;
