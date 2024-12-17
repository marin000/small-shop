import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import './i18n/index';
import { ToastProvider } from './providers/toastContext';
import './styles/toastStyles.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ToastProvider>
  </QueryClientProvider>
);
