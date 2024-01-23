import React, { useState } from 'react';
import FavoriteCars from './favcarlist';
import './favsearch.css'



const sewy = ({favCar}) => {
    return(
        <div>
        <h2 className="body_search" >
              Selected Cars
            </h2>

          {favCar.map((car)=>car.map((specific)=>{
          return <FavoriteCars key={specific.id}{...specific}/>;
        }
      
      ))};
    </div>
    );
}

export default sewy;