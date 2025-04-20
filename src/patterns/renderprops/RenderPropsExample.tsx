import React, { useState } from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import MouseTracker from './MouseTracker';

const RenderPropsExample: React.FC = () => {
  const [showCoordinates, setShowCoordinates] = useState(true);
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Render Props Pattern</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        The Render Props pattern is a technique for sharing code between React components using a prop whose value is a function.
        It provides a way to tell a component what to render while encapsulating the state or behavior.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example</h3>
          <FadeIn>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-between items-center">
                <h4 className="font-semibold">Mouse Position Tracker</h4>
                <button 
                  onClick={() => setShowCoordinates(!showCoordinates)}
                  className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg"
                >
                  {showCoordinates ? 'Hide' : 'Show'} Coordinates
                </button>
              </div>
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                <MouseTracker>
                  {({ x, y }) => (
                    <>
                      <div 
                        className="absolute w-8 h-8 rounded-full bg-blue-500/50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ left: x, top: y }}
                      />
                      {showCoordinates && (
                        <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 px-3 py-2 rounded-md shadow text-sm">
                          x: {x}, y: {y}
                        </div>
                      )}
                      <div className="h-full flex items-center justify-center text-gray-400">
                        Move your mouse here
                      </div>
                    </>
                  )}
                </MouseTracker>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Code</h3>
          <CodeBlock
            code={`// MouseTracker component with render props
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };
  
  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top } = event.currentTarget.getBoundingClientRect();
    
    this.setState({
      x: clientX - left,
      y: clientY - top
    });
  };
  
  render() {
    return (
      <div
        onMouseMove={this.handleMouseMove}
        className="h-full w-full"
      >
        {this.props.children(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker>
  {({ x, y }) => (
    <div 
      className="absolute rounded-full bg-blue-500/50"
      style={{ left: x, top: y }}
    />
  )}
</MouseTracker>`}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Enables component logic reuse in a flexible way</li>
          <li>Decouples the parent component from its children</li>
          <li>Allows for dynamic rendering based on props or state</li>
          <li>Makes components more composable and customizable</li>
        </ul>
      </div>
    </div>
  );
};

export default RenderPropsExample;