import React from 'react';
import proteinsIcon from './icons/protein-icon.png';
import carbsIcon from './icons/carbs-icon.png';
import fatsIcon from './icons/fat-icon.png';
import caloriesIcon from './icons/calories-icon.png';

const iconMap = {
  Proteins: proteinsIcon,
  Carbs: carbsIcon,
  Fats: fatsIcon,
  Calories: caloriesIcon,
};

const keyMap = {
  calorieCount: 'Calories',
  proteinCount: 'Proteins',
  carbohydrateCount: 'Carbs',
  lipidCount: 'Fats'
};

const NutritionInfo = ({ nutritionData }) => (
  <div className="nutrition-info">
    {Object.keys(nutritionData).map((key) => (
      <div className="nutrition-item" key={key}>
        <div className="icon">
          <img src={iconMap[keyMap[key]]} alt={`${keyMap[key]} icon`} width="24" height="24" />
        </div>
        <p>{nutritionData[key]} {/* Affiche la valeur directement */}</p>
        <p>{keyMap[key]}</p>
      </div>
    ))}
  </div>
);


export default NutritionInfo;
