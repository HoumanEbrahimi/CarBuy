import React, { useState } from 'react';
import FavoriteCars from './favcarlist.js';
import "./favsearch.css";
const Favorites = (carData)=>{
    return (
        <div className="body_search">
          <h2 className="section" >
                Selected Cars
                
          </h2>
  
          {carData.map((car)=> {
            return <FavoriteCars key={car.id}{...car}>
            </FavoriteCars>;
          }
        
        )};
      </div>
      );

}
export default Favorites;