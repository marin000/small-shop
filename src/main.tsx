import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from './components/errorBoundaryFallback.tsx';
import './i18n/index';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  </ErrorBoundary>
);
