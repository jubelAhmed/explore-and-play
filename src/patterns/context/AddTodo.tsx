import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoContext } from './TodoContext';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
        disabled={!text.trim()}
      >
        <Plus className="w-4 h-4" />
      </button>
    </form>
  );
};

export default AddTodo;