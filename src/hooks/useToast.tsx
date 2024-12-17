import { toast, ToastOptions, TypeOptions } from 'react-toastify';
import BaseToast from '@/components/baseToast';

const useToast = () => {
  const showToast = (
    title: string,
    description: string,
    type: TypeOptions,
    toastOptions?: ToastOptions
  ) => {
    toast(
      <BaseToast
        title={title}
        description={description}
        type={type}
      />,
      {
        type,
        ...toastOptions,
      } as ToastOptions
    );
  };

  return { showToast };
};

export default useToast;
