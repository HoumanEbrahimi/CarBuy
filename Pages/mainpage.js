import React, { useState } from 'react';
import './mainpage.css';
import CarList2 from './favcarlist.js';
import Db from '../DBs/list.json';



const MainPage =({carData,setDcarData,favCar})=>{
  const handleSearchChange = (e)=>{
      if(!e.target.value) return setDcarData(carData)

      const filterCars=carData.filter(data=>data.Brand.includes(e.target.value))
      setDcarData(filterCars);
  }
    return (
      <div>
      <div>      
          <br></br>
      <h1  style={{color:"#2596be",fontSize:"55px",fontFamily:"Times New Roman"}}> Welcome to CarBuy!</h1>
      <br></br>
      <img className="responsive-image"
          src="https://github.com/HoumanEbrahimi/Lol/blob/main/WhatsApp%20Image%202024-01-10%20at%2021.32.48_8ff8dc8e.jpg?raw=true"
          alt=""
          width="450" 
          height="450"
          />    
   
          <br></br>
          <p className="font-custom"> 
CarBuy is an innovative dealer app that has revolutionized the automotive purchasing experience. Designed to streamline the car-buying process, 
CarBuy empowers both dealers and customers with a user-friendly platform 
that offers a seamless and efficient transactional journey. 
With a comprehensive inventory of vehicles, users can browse
 through an extensive selection, filtering options based on preferences such as make, 
 model, and price range.</p>
          <br></br>
          <strong className="bold"> Enjoy your search!</strong>

       </div>

          <br></br><br></br> <br></br>

      </div>
    );
}

export default MainPage;