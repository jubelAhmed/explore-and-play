import React, { useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  children: (position: MousePosition) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ children }) => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { left, top } = event.currentTarget.getBoundingClientRect();
    
    setPosition({
      x: clientX - left,
      y: clientY - top
    });
  };
  
  return (
    <div
      onMouseMove={handleMouseMove}
      className="h-full w-full"
    >
      {children(position)}
    </div>
  );
};

export default MouseTracker;