import React, { useState } from 'react';
import "./Button.css"

interface ButtonProps {
  value: string;
  action: (...args: any) => void;
}

export const ButtonCateg = ({ value, action }: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    action(); // Appel de l'action associée au bouton
  };

  return (
    <button
      className={`buttonCateg ${isActive ? 'activeCateg' : ''}`}
      onClick={handleClick}>
      {value}
    </button>
  );
};

export const ButtonGenre = ({ value, action }: ButtonProps) => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(!isActive);
      action(); // Appel de l'action associée au bouton
    };
  
    return (
      <button
        className={`buttonGenre ${isActive ? 'activeGenre' : ''}`}
        onClick={handleClick}>
        {value}
      </button>
    );
  };
