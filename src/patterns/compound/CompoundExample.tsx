import React from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

const CompoundExample: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Compound Components Pattern</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Compound components are components that work together to form a complete UI pattern.
        They use React's context API under the hood to share state implicitly between components
        that are nested within a parent component, forming a unified component API.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example</h3>
          <FadeIn>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <Tabs defaultTab="react">
                <TabList>
                  <Tab id="react">React</Tab>
                  <Tab id="vue">Vue</Tab>
                  <Tab id="angular">Angular</Tab>
                </TabList>
                
                <TabPanel id="react">
                  <div className="py-4">
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">React.js</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      React is a JavaScript library for building user interfaces. It allows developers
                      to create reusable UI components and manage state efficiently.
                    </p>
                  </div>
                </TabPanel>
                
                <TabPanel id="vue">
                  <div className="py-4">
                    <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Vue.js</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Vue is a progressive JavaScript framework for building user interfaces.
                      It's designed to be incrementally adoptable and easy to integrate with other libraries.
                    </p>
                  </div>
                </TabPanel>
                
                <TabPanel id="angular">
                  <div className="py-4">
                    <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Angular</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Angular is a platform and framework for building single-page client applications
                      using HTML and TypeScript. It implements core and optional functionality as a set
                      of TypeScript libraries.
                    </p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </FadeIn>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Code</h3>
          <CodeBlock
            code={`// Compound components usage
<Tabs defaultTab="react">
  <TabList>
    <Tab id="react">React</Tab>
    <Tab id="vue">Vue</Tab>
    <Tab id="angular">Angular</Tab>
  </TabList>
  
  <TabPanel id="react">
    <div className="py-4">
      <h4 className="font-semibold mb-2">React.js</h4>
      <p>React is a JavaScript library for building UIs.</p>
    </div>
  </TabPanel>
  
  <TabPanel id="vue">
    <div className="py-4">
      <h4 className="font-semibold mb-2">Vue.js</h4>
      <p>Vue is a progressive framework for UIs.</p>
    </div>
  </TabPanel>
  
  <TabPanel id="angular">
    <div className="py-4">
      <h4 className="font-semibold mb-2">Angular</h4>
      <p>Angular is a platform for building applications.</p>
    </div>
  </TabPanel>
</Tabs>`}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Creates intuitive component APIs that mimic HTML structure</li>
          <li>Improves component flexibility and reusability</li>
          <li>Separates state management from rendering</li>
          <li>Allows for customization of individual parts</li>
          <li>Creates a more declarative API for complex components</li>
        </ul>
      </div>
    </div>
  );
};

export default CompoundExample;