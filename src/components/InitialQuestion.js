import React, { useState } from 'react';
import PositiveMessage from './PositiveMessage';
import TryAgain from './TryAgain';

function InitialQuestion({ onAnswer }) {
  const [response, setResponse] = useState('ask');

  if (response === 'yes') {
    return <PositiveMessage onNext={onAnswer} />; // Pass onAnswer directly
  } else if (response === 'no') {
    return <TryAgain onRetry={() => setResponse('ask')} />;
  }

  const handleYes = () => {
    setResponse('yes');
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <div>
      <h2>Would you like to go out for a virtual dinner date?</h2>
      <button onClick={handleNo}>No</button>
      <button onClick={handleYes}>Yes!</button>
    </div>
  );
}


export default InitialQuestion;
