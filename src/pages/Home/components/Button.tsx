import React, { useState } from 'react';
import "./Button.css"

interface ButtonProps {
  value: string;
  action: (...args: any) => void;
}

export const Button = ({ value, action }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    action(); // Appel de l'action associée au bouton
  };

  return (
    <button
      className={`button1 ${isActive ? 'active1' : ''}`}
      onClick={handleClick}>
      {value}
    </button>
  );
};

export const Button2 = ({ value, action }: ButtonProps) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive);
      action(); // Appel de l'action associée au bouton
    };
  
    return (
      <button
        className={`button2 ${isActive ? 'active2' : ''}`}
        onClick={handleClick}>
        {value}
      </button>
    );
  };
