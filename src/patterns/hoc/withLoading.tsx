import React from 'react';

// Higher-Order Component to add loading state
const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ isLoading, ...props }: P & { isLoading: boolean }) => {
    if (isLoading) {
      return (
        <div className="animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-2">
              <div className="h-4 w-36 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-3 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      );
    }
    
    return <Component {...props as P} />;
  };
};

export default withLoading;