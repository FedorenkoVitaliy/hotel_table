import React from 'react';
import './Tooltip.scss';

const Tooltip = ({ text, children }) => {
  return (
    <div className='tooltip'>
      <div className="tooltip__content">
        {text}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
