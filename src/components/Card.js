import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg border-2 border-solid border-red-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);

export default Card;
