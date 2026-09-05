import React from 'react';
import angryCat from '../images/angrycat.gif'; 

function TryAgain({ onRetry }) {
  return (
    <div>
      <h2>Wrong Answer!</h2>
      <img className="reaction" src={angryCat} alt="Angry Cat"/>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default TryAgain;
