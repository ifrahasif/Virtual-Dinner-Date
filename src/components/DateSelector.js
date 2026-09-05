import React, { useState } from 'react';

function DateSelector({ onDateSet, onNext }) {
  const [localDate, setLocalDate] = useState('');

  const handleDateChange = (event) => {
    setLocalDate(event.target.value);
  };

  const handleNext = () => {
    if (!localDate) {
      alert("Please select a date for our virtual dinner!");
      return;
    }

    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const currentDate = yyyy + '-' + mm + '-' + dd;

    // Check if selected date is before today's date
    if (localDate < currentDate) {
      alert("Please select a date that is today or in the future.");
      return;
    }

    onDateSet(localDate);  // Correctly use the passed prop to set date
    onNext();  // Proceed to the next step
  };

  return (
    <div>
      <h2>Choose a date for our virtual dinner:</h2>
      <input type="date" value={localDate} onChange={handleDateChange} />
      <button onClick={handleNext}>Next Up: Food Fun! (っ˘ڡ˘ς) 🍴</button>
    </div>
  );
}

export default DateSelector;

