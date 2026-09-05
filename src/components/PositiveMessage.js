import React from 'react';
import catplay from '../images/catplay.gif'; 

function PositiveMessage({ onNext }) {
  const handleClick = () => {
    console.log('Next button clicked!');
    onNext();
  };
  return (
    <div>
      <h2>Yay! ✨🎉 You said yes! ٩(◕‿◕｡)۶</h2>
      <img className="reaction" src={catplay} alt="Cat Playing"/>
      <button onClick={onNext}>Let's Pick a Date! ✨📅💖</button>  
    </div>
  );
}

export default PositiveMessage;
