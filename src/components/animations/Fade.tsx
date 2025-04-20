import React, { useState, useEffect } from 'react';

interface FadeProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export const FadeIn: React.FC<FadeProps> = ({ 
  children, 
  duration = 500, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="transition-all ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export const FadeInOut: React.FC<FadeProps & { show: boolean }> = ({ 
  children, 
  duration = 300,
  delay = 0,
  show 
}) => {
  return (
    <div
      className="transition-all ease-in-out"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(10px)',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};