import React from 'react';
import { motion } from '../utils/motion';

interface PatternCardProps {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const PatternCard: React.FC<PatternCardProps> = ({ title, icon, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`p-4 rounded-lg text-center transition-all duration-300 ${
        isActive
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className={`mb-2 ${isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
          {icon}
        </div>
        <p className="font-medium">{title}</p>
      </div>
    </motion.button>
  );
};

export default PatternCard;