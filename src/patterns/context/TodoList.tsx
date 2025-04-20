import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { useTodoContext } from './TodoContext';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoContext();
  
  if (todos.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500 dark:text-gray-400">
        No todos yet. Add one above!
      </div>
    );
  }
  
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li 
          key={todo.id} 
          className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
            todo.completed 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900' 
              : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <div className="flex items-center">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`flex-shrink-0 w-5 h-5 mr-3 rounded-full border ${
                todo.completed 
                  ? 'bg-green-500 border-green-500 flex items-center justify-center' 
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              {todo.completed && <Check className="w-3 h-3 text-white" />}
            </button>
            <span className={`${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-500 hover:text-red-500 transition-colors duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;