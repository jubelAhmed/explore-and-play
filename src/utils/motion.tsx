import React from 'react';

interface MotionProps {
  whileHover?: {
    scale?: number;
    y?: number;
    opacity?: number;
  };
  whileTap?: {
    scale?: number;
  };
  [key: string]: any;
}

export const motion = {
  div: ({ whileHover, whileTap, ...props }: MotionProps & React.HTMLAttributes<HTMLDivElement>) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
    
    const style = {
      ...(props.style || {}),
      transition: 'transform 200ms, opacity 200ms',
      transform: `scale(${
        isPressed && whileTap?.scale ? whileTap.scale : 
        isHovered && whileHover?.scale ? whileHover.scale : 1
      }) translateY(${
        isHovered && whileHover?.y ? whileHover.y : 0
      }px)`,
      opacity: isHovered && whileHover?.opacity !== undefined ? whileHover.opacity : 1,
    };
    
    return (
      <div
        {...props}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      />
    );
  },
  button: ({ whileHover, whileTap, ...props }: MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);
    
    const style = {
      ...(props.style || {}),
      transition: 'transform 200ms, opacity 200ms',
      transform: `scale(${
        isPressed && whileTap?.scale ? whileTap.scale : 
        isHovered && whileHover?.scale ? whileHover.scale : 1
      }) translateY(${
        isHovered && whileHover?.y ? whileHover.y : 0
      }px)`,
      opacity: isHovered && whileHover?.opacity !== undefined ? whileHover.opacity : 1,
    };
    
    return (
      <button
        {...props}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      />
    );
  }
};