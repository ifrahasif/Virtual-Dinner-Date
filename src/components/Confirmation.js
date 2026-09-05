import React from 'react';
import cutecat from '../images/cutecat.gif'; 

function Confirmation({ date, food }) {
  return (
    <div>
      <h2>🌟✨ Date Night is All Set! ✨🌟</h2>
      <p>We're going to have a virtual date on <strong>{date}</strong>! 🎉💖</p>
      <p>Get ready for some yummy <strong>{food}</strong>! Let's make it a night to remember! (≧◡≦) ♡</p>
      <img className="reaction" src={cutecat} alt="Cat Jumping"/>
    </div>
  );
}

export default Confirmation;
