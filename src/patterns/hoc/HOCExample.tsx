import React from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import withLoading from './withLoading';
import withErrorBoundary from './withErrorBoundary';
import UserProfile from './UserProfile';
import DataTable from './DataTable';

// Create enhanced components with HOCs
const UserProfileWithLoading = withLoading(UserProfile);
const DataTableWithLoadingAndError = withErrorBoundary(withLoading(DataTable));

const HOCExample: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleError = () => {
    setHasError(true);
  };
  
  const userData = {
    name: 'Jane Smith',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    role: 'Product Designer',
    bio: 'Creating beautiful and intuitive interfaces is my passion. I love working on products that make a difference.'
  };

  const tableData = {
    headers: ['Name', 'Email', 'Role'],
    rows: [
      ['John Doe', 'john@example.com', 'Developer'],
      ['Jane Smith', 'jane@example.com', 'Designer'],
      ['Mike Johnson', 'mike@example.com', 'Manager']
    ]
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Higher-Order Components (HOC)</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Higher-Order Components are functions that take a component and return a new enhanced component.
        They allow you to reuse component logic, add additional props, or modify the rendering behavior.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example 1: Loading State</h3>
          <FadeIn>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-between items-center">
                <h4 className="font-semibold">User Profile with Loading State</h4>
                <button 
                  onClick={handleReload}
                  className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg"
                >
                  Reload
                </button>
              </div>
              <UserProfileWithLoading isLoading={isLoading} user={userData} />
            </div>
          </FadeIn>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Example 2: Error Boundary</h3>
          <FadeIn delay={200}>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-between items-center">
                <h4 className="font-semibold">Data Table with Loading & Error States</h4>
                <div className="space-x-2">
                  <button 
                    onClick={handleReload}
                    className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg"
                  >
                    Reload
                  </button>
                  <button 
                    onClick={handleError}
                    className="text-sm px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg"
                  >
                    Trigger Error
                  </button>
                </div>
              </div>
              <DataTableWithLoadingAndError 
                isLoading={isLoading} 
                hasError={hasError}
                data={tableData}
              />
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Loading HOC Code</h3>
          <CodeBlock
            code={`// withLoading HOC
const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return (
        <div className="animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            <div className="space-y-2">
              <div className="h-4 w-36 bg-gray-300 rounded"></div>
              <div className="h-3 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      );
    }
    
    return <Component {...props} />;
  };
};

// Usage
const UserProfileWithLoading = withLoading(UserProfile);

<UserProfileWithLoading isLoading={isLoading} user={userData} />`}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Error Boundary HOC Code</h3>
          <CodeBlock
            code={`// withErrorBoundary HOC
const withErrorBoundary = (Component) => {
  return ({ hasError, ...props }) => {
    if (hasError) {
      return (
        <div className="text-center py-8">
          <div className="text-red-500 mb-2">
            An error occurred!
          </div>
          <button
            onClick={props.onRetry}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg"
          >
            Try Again
          </button>
        </div>
      );
    }
    
    return <Component {...props} />;
  };
};

// Usage with multiple HOCs
const EnhancedComponent = withErrorBoundary(withLoading(Component));

<EnhancedComponent 
  isLoading={isLoading}
  hasError={hasError}
  onRetry={handleRetry}
  {...props}
/>`}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Code reuse across multiple components</li>
          <li>Separation of concerns (component logic vs. UI rendering)</li>
          <li>Composition of multiple HOCs to add various behaviors</li>
          <li>Centralizing cross-cutting concerns like loading states or error handling</li>
          <li>Easy to test and maintain shared functionality</li>
          <li>Reduces code duplication across components</li>
        </ul>
      </div>
    </div>
  );
};

export default HOCExample;