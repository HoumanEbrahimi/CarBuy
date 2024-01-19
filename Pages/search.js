import CarList from './carlist.js';
import "./search.css";
import apps from '../App';
import React, { useState } from 'react';
import Reset from './Reset.js';
import File from '../teslas.json'

const url = 'http://localhost:8000/teslas'

const Searching = ({carData,removeCars,favoriteCars,setDcarData}) => {
  const [a,b]=useState('')
  const [c,d]=useState('')
  console.log(carData.length)
  const fetchCars = async () => {    

    try{
      const response=await fetch(url);
      const carData=await response.json();
      setDcarData(carData);

    }
    catch(error){
      console.log(error);
    }

}


  const handleChange =(e)=> {
    b(e.target.value);
   
  };
  const handleChange2=(e)=>{
    d(e.target.value);
  }

  const handleSearchChange = (e)=>{
      if (a.trim().length!==0 && c.trim().length!==0){
        const filterCars=carData.filter(data=>data.Brand.includes(a) && data.title.includes(c));
        setDcarData(filterCars);
      }

      else if(a.trim().length!==0 && c.trim().length===0){
        console.log(a,c)

        const filterCars=carData.filter(data=>data.Brand.includes(a) || data.Brand.toString().toUpperCase()===a);
        setDcarData(filterCars);

      }
      else{
        fetchCars();
        console.log("empty bro")
      }     
}


    return (
      <div className="background" >
        
          <input onChange={handleChange} placeholder="Brand" type="text" id="search">
          </input>
          <input onChange={handleChange2} placeholder="Model" type="text" id="search">
          </input>
        <button onClick={handleSearchChange}> Search</button>
      <p> &nbsp;</p>

        <h2 >
            Available Cars
            <Reset> </Reset>
        </h2>

        {carData.map((car)=> {
          return <CarList key={car.id}{...car} removeCars={removeCars} favoriteCars={favoriteCars}>
          </CarList>;
        }

      
      )};
 
    </div>
    );
}

export default Searching;
