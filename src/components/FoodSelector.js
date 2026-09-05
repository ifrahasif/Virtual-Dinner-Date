import React from 'react';
import './FoodSelector.css'; 
import chickenBurger from '../images/chickenburger.jpg';
import chickenWings from '../images/chickenwings.jpg';
import pizza from '../images/pizza.jpg';
import shawarma from '../images/shawarma.jpeg'; 
import tacos from '../images/tacos.jpg'; 
import tabouleh from '../images/tabouleh.jpg'; 

function FoodSelector({ onFoodSelect, onNext }) {
  const foods = [
    { name: 'Chicken Burger', image: chickenBurger },
    { name: 'Chicken Wings', image: chickenWings },
    { name: 'Pizza', image: pizza },
    { name: 'Shawarma', image: shawarma },
    { name: 'Tacos', image: tacos },
    { name: 'Tabouleh', image: tabouleh }
  ];

  const handleFoodSelect = (food) => {
    onFoodSelect(food.name);
    onNext();
  };

  return (
    <div className="food-container">
      <h2>What would you like to order for our dinner?</h2>
      <div className="food-options">
        {foods.map((food, index) => (
          <div key={index} className="food-item" onClick={() => handleFoodSelect(food)}>
            <img src={food.image} alt={food.name} className="food-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodSelector;
