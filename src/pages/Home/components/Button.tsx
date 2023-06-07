import React, { useState } from 'react';
import "./Button.css"

interface ButtonProps {
  value: string;
  action: (...args: any) => void;
  isActive: boolean;
}

// Why not having one only Button component ? It is the idea between ahaving generic 
// component and passing them props
// Here the button is not generic, it is too much related to the business concepts (category or genre here)
// And you can pass css as props
export const ButtonCateg = ({ value, action, isActive }: ButtonProps) => {
  const handleClick = () => {
    action(); // Appel de l'action associée au bouton
  };

  return (
    <button
      className={`buttonCateg ${isActive ? 'activeCateg' : ''}`}
      onClick={handleClick}
    >
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
