import { FallbackProps } from 'react-error-boundary';

const ErrorBoundaryFallback = ({
  error,
}: // resetErrorBoundary,
FallbackProps) => {
  // TODO on click go to Home
  // resetErrorBoundary();

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  );
};

export default ErrorBoundaryFallback;
