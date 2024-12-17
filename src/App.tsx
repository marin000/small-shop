import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from './components/errorBoundaryFallback';

const App: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <MainRouter />
      </ErrorBoundary>
    </Router>
  );
};
export default App;
