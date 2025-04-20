import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;