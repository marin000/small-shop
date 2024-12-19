import React, { createContext, useContext, ReactNode } from 'react';
import { ToastContainer, ToastOptions } from 'react-toastify';
import useToast from '@/hooks/useToast';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContextProps {
  showToast: (
    title: string,
    description: string,
    type: 'default' | 'success' | 'warning' | 'error' | 'info',
    toastOptions?: ToastOptions
  ) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);

const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
}) => {
  const { showToast } = useToast();

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        autoClose={3000}
        closeButton={false}
        closeOnClick
        draggable={false}
        pauseOnHover
        newestOnTop
        icon={false}
        hideProgressBar={true}
      />
    </ToastContext.Provider>
  );
};

const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      'useToastContext must be used within a ToastProvider'
    );
  }
  return context;
};

export { ToastProvider, useToastContext };
