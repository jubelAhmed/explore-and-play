import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { globalEventEmitter } from './EventEmitter';
import { FadeInOut } from '../../components/animations/Fade';

interface Notification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error';
}

const NotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const unsubscribe = globalEventEmitter.subscribe('notification', (notification: Notification) => {
      setNotifications(prev => [...prev, { ...notification, id: Date.now() }]);
    });

    return () => unsubscribe();
  }, []);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const addRandomNotification = () => {
    const types: Notification['type'][] = ['info', 'success', 'error'];
    const messages = [
      'New message received',
      'Operation completed successfully',
      'An error occurred during processing',
      'Update available',
      'Profile updated'
    ];

    globalEventEmitter.emit('notification', {
      type: types[Math.floor(Math.random() * types.length)],
      message: messages[Math.floor(Math.random() * messages.length)]
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold">Live Notifications</h4>
        <button
          onClick={addRandomNotification}
          className="flex items-center space-x-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
        >
          <Bell className="w-4 h-4" />
          <span>Trigger Notification</span>
        </button>
      </div>

      <div className="space-y-2">
        {notifications.map(notification => (
          <FadeInOut key={notification.id} show={true}>
            <div className={`flex items-center justify-between p-3 rounded-lg ${
              notification.type === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
              notification.type === 'error' ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
              'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
            }`}>
              <span>{notification.message}</span>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-2 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </FadeInOut>
        ))}
      </div>
    </div>
  );
};

export default NotificationSystem;