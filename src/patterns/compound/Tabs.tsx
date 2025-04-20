import React, { createContext, useContext, useState } from 'react';

// Tab Context
interface TabContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

const useTabContext = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('Tab components must be used within a Tabs component');
  }
  return context;
};

// Tabs (Parent)
interface TabsProps {
  children: React.ReactNode;
  defaultTab: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-container">
        {children}
      </div>
    </TabContext.Provider>
  );
};

// TabList
interface TabListProps {
  children: React.ReactNode;
}

export const TabList: React.FC<TabListProps> = ({ children }) => {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
};

// Tab
interface TabProps {
  children: React.ReactNode;
  id: string;
}

export const Tab: React.FC<TabProps> = ({ children, id }) => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === id;
  
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`py-2 px-4 text-sm font-medium transition-all duration-200 ${
        isActive 
          ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
      }`}
    >
      {children}
    </button>
  );
};

// TabPanel
interface TabPanelProps {
  children: React.ReactNode;
  id: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, id }) => {
  const { activeTab } = useTabContext();
  
  if (activeTab !== id) {
    return null;
  }
  
  return (
    <div className="tab-panel">
      {children}
    </div>
  );
};