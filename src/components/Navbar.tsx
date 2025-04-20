import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  logo: React.ReactNode;
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo, title }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`sticky top-0 z-10 py-4 px-6 md:px-10 shadow-sm transition-all duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {logo}
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-gray-700 hover:bg-gray-600' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;