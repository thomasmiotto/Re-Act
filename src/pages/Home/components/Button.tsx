import React from 'react';
import './Button.css'

export const Button = () => {
    return (
      <div className="container">
       <button className="button-24">Recent</button>
       <button className="button-24">Upcoming</button>
       <button className="button-24">Popular</button>
      </div>
    );
  };