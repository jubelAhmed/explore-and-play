import React from 'react';
import { AlertOctagon } from 'lucide-react';

interface WithErrorBoundaryProps {
  hasError?: boolean;
  onRetry?: () => void;
}

const withErrorBoundary = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ hasError, onRetry, ...props }: P & WithErrorBoundaryProps) => {
    if (hasError) {
      return (
        <div className="text-center py-8">
          <AlertOctagon className="w-12 h-12 text-red-500 dark:text-red-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            An error occurred while loading the data
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200"
            >
              Try Again
            </button>
          )}
        </div>
      );
    }
    
    return <Component {...props as P} />;
  };
};

export default withErrorBoundary;