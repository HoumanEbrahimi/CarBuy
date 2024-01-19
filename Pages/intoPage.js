import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Detailed from './detailedCars.js'
import CardList from './favcarlist.js'

const Inside = () => {
    const [selectedCard, setSelectedCard] = useState(null);
  
    const handleCardClick = (cardData) => {
      setSelectedCard(cardData);
    };
  
    return (
      <div>
        {/* Render your list of cards */}
        <CardList onCardClick={handleCardClick} />
        
        {/* Render the DetailedCard if a card is selected */}
        {selectedCard && <Detailed cardData={selectedCard} />}
      </div>
    );
  };

export default Inside;
