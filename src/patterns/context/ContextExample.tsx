import React from 'react';
import { FadeIn } from '../../components/animations/Fade';
import CodeBlock from '../../components/CodeBlock';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const ContextExample: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Context API Pattern</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        The Context API provides a way to share values between components without having to explicitly pass props
        through every level of the component tree. It's ideal for sharing global state like themes, user data, or
        application preferences.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Example</h3>
          <FadeIn>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <TodoProvider>
                <h4 className="font-semibold mb-4">Todo App with Context</h4>
                <AddTodo />
                <div className="mt-4">
                  <TodoList />
                </div>
              </TodoProvider>
            </div>
          </FadeIn>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Code</h3>
          <CodeBlock
            code={`// TodoContext.tsx
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build an app', completed: false },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { 
      id: Date.now(), 
      text, 
      completed: false 
    }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } 
        : todo
    ));
  };

  const value = { todos, addTodo, toggleTodo };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

// Usage in components
function TodoList() {
  const { todos, toggleTodo } = useTodoContext();
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`}
          />
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Avoids prop drilling through intermediate components</li>
          <li>Centralizes related state and functions</li>
          <li>Creates reusable data providers</li>
          <li>Makes component composition easier and more flexible</li>
          <li>Improves code maintainability for shared state</li>
        </ul>
      </div>
    </div>
  );
};

export default ContextExample;