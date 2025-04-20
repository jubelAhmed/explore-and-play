import React from 'react';

interface CardProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt = 'Card image',
  footer,
  children,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
        <div>{children}</div>
      </div>
      {footer && (
        <div className="px-5 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;