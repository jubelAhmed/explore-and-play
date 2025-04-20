import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  error,
  className,
  ...props
}) => {
  const inputClasses = `
    w-full px-4 py-2 rounded-lg border
    focus:outline-none focus:ring-2 focus:ring-blue-500
    dark:bg-gray-700 dark:border-gray-600
    ${error ? 'border-red-500' : 'border-gray-300'}
    ${className || ''}
  `;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          className={inputClasses}
          rows={4}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={type}
          className={inputClasses}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;