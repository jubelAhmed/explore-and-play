import React from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import NotificationSystem from './NotificationSystem';
import StockTracker from './StockTracker';

const ObserverExample: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Observer Pattern</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        The Observer pattern creates a subscription model where objects (observers) can subscribe to
        events and get notified when those events occur. This pattern is particularly useful for
        implementing event handling systems and real-time features.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example 1: Notification System</h3>
          <FadeIn>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <NotificationSystem />
            </div>
          </FadeIn>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Example 2: Stock Tracker</h3>
          <FadeIn delay={200}>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <StockTracker />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Observer Implementation</h3>
          <CodeBlock
            code={`// Event emitter implementation
class EventEmitter {
  private subscribers: Map<string, Function[]> = new Map();

  subscribe(event: string, callback: Function) {
    if (!this.subscribers.has(event)) {
      this.subscribers.set(event, []);
    }
    this.subscribers.get(event)?.push(callback);
    
    return () => {
      const callbacks = this.subscribers.get(event) || [];
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    };
  }

  emit(event: string, data?: any) {
    const callbacks = this.subscribers.get(event) || [];
    callbacks.forEach(callback => callback(data));
  }
}`}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Usage Example</h3>
          <CodeBlock
            code={`// Using the observer pattern
const notificationSystem = new EventEmitter();

// Subscribe to events
const unsubscribe = notificationSystem.subscribe(
  'notification',
  (message) => {
    console.log('New notification:', message);
  }
);

// Emit events
notificationSystem.emit('notification', {
  type: 'success',
  message: 'Operation completed successfully'
});

// Cleanup
unsubscribe();`}
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Loose coupling between event producers and consumers</li>
          <li>Easy implementation of event-driven architectures</li>
          <li>Flexible subscription and unsubscription mechanism</li>
          <li>Great for handling asynchronous operations</li>
          <li>Scalable way to manage complex state updates</li>
        </ul>
      </div>
    </div>
  );
};

export default ObserverExample;