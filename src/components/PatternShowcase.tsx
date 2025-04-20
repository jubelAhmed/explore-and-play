import React, { useState } from 'react';
import { Code, Aperture, Layers, Palette, Combine, Boxes, PencilRuler, LayoutTemplate, Eye, Factory } from 'lucide-react';
import PatternCard from './PatternCard';
import CompositionalExample from '../patterns/compositional/CompositionalExample';
import HOCExample from '../patterns/hoc/HOCExample';
import RenderPropsExample from '../patterns/renderprops/RenderPropsExample';
import ContextExample from '../patterns/context/ContextExample';
import CompoundExample from '../patterns/compound/CompoundExample';
import ObserverExample from '../patterns/observer/ObserverExample';
import FactoryExample from '../patterns/factory/FactoryExample';
import { FadeIn } from './animations/Fade';

const patterns = [
  {
    id: 'compositional',
    title: 'Component Composition',
    description: 'Building complex UIs by composing smaller, reusable components together.',
    icon: <Combine className="h-6 w-6" />,
    component: <CompositionalExample />
  },
  {
    id: 'hoc',
    title: 'Higher-Order Components',
    description: 'Functions that take a component and return a new enhanced component.',
    icon: <Layers className="h-6 w-6" />,
    component: <HOCExample />
  },
  {
    id: 'renderprops',
    title: 'Render Props',
    description: 'Sharing code between components using a prop whose value is a function.',
    icon: <PencilRuler className="h-6 w-6" />,
    component: <RenderPropsExample />
  },
  {
    id: 'context',
    title: 'Context API',
    description: 'Sharing state down the component tree without prop drilling.',
    icon: <LayoutTemplate className="h-6 w-6" />,
    component: <ContextExample />
  },
  {
    id: 'compound',
    title: 'Compound Components',
    description: 'Components that work together to form a cohesive unit of functionality.',
    icon: <Boxes className="h-6 w-6" />,
    component: <CompoundExample />
  },
  {
    id: 'observer',
    title: 'Observer Pattern',
    description: 'Implementation of publish/subscribe pattern for event handling.',
    icon: <Eye className="h-6 w-6" />,
    component: <ObserverExample />
  },
  {
    id: 'factory',
    title: 'Factory Pattern',
    description: 'Creating objects without explicitly specifying their exact classes.',
    icon: <Factory className="h-6 w-6" />,
    component: <FactoryExample />
  }
];

const PatternShowcase: React.FC = () => {
  const [activePattern, setActivePattern] = useState<string>(patterns[0].id);

  const activeComponent = patterns.find(pattern => pattern.id === activePattern)?.component;

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <FadeIn>
        <div className="mb-12 text-center">
          <div className="inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">React Design Patterns</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore common React design patterns with interactive examples and beautiful visualizations.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
        {patterns.map((pattern) => (
          <PatternCard
            key={pattern.id}
            title={pattern.title}
            icon={pattern.icon}
            isActive={activePattern === pattern.id}
            onClick={() => setActivePattern(pattern.id)}
          />
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 transition-all duration-500">
        <FadeIn key={activePattern}>
          {activeComponent}
        </FadeIn>
      </div>
    </div>
  );
};

export default PatternShowcase;