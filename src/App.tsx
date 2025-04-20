import React from 'react';
import { Layers } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import PatternShowcase from './components/PatternShowcase';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Navbar
          logo={<Layers className="h-8 w-8 text-primary-600" />}
          title="React Design Patterns"
        />
        <PatternShowcase />
      </Layout>
    </ThemeProvider>
  );
}

export default App;