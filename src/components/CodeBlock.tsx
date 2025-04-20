import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx' }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md my-4 bg-gray-800 text-gray-100">
      <div className="px-4 py-2 bg-gray-700 flex justify-between items-center">
        <span className="text-xs font-mono uppercase tracking-wide">{language}</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;