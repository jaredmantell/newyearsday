import React, { useState } from 'react';

const Toggler = () => {
  // State to keep track of which elements are toggled
  const [toggledElements, setToggledElements] = useState({});

  // Function to handle the toggle
  const handleToggle = (targetID) => {
    setToggledElements(prev => ({
      ...prev,
      [targetID]: !prev[targetID]
    }));
  };

  return (
    <div>
      {/* Dynamically created toggleable elements */}
      {Object.keys(toggledElements).map((elementKey) => (
        <div key={elementKey}>
          <button 
            onClick={() => handleToggle(elementKey)} 
            className={toggledElements[elementKey] ? 'active' : ''}
          >
            Toggle {elementKey}
          </button>

          <div id={elementKey} className={toggledElements[elementKey] ? 'toggled' : ''}>
            {elementKey} Content
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toggler;
