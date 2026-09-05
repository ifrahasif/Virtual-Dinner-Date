import React, { useState } from 'react';
import './App.css';
import InitialQuestion from './InitialQuestion';
import PositiveMessage from './PositiveMessage';
import DateSelector from './DateSelector';
import FoodSelector from './FoodSelector';
import Confirmation from './Confirmation';
import HeartEffect from './HeartEffect'; 
import Footer from './Footer'; 


function App() {
  const [stage, setStage] = useState('initial');
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');

  const handleAnswer = () => {
    setStage('positiveMessage');
  };

  const handlePositiveMessageNext = () => {
    setStage('dateSelection');
  };

  const handleDateSelection = (selectedDate) => {
    setDate(selectedDate);
    setStage('foodSelection');
  };

  const handleFoodSelection = (selectedFood) => {
    setFood(selectedFood);
    setStage('confirmation');
  };

  return (
    <div className="app">
      <HeartEffect />
      {stage === 'initial' && <InitialQuestion onAnswer={handleAnswer} />}
      {stage === 'positiveMessage' && <PositiveMessage onNext={handlePositiveMessageNext} />}
      {stage === 'dateSelection' && <DateSelector onDateSet={handleDateSelection} onNext={() => setStage('foodSelection')} />}
      {stage === 'foodSelection' && <FoodSelector onFoodSelect={handleFoodSelection} onNext={() => setStage('confirmation')} />}
      {stage === 'confirmation' && <Confirmation date={date} food={food} />}
      <Footer />
    </div>
  );
}

export default App;
