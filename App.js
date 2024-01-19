import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Bruh from './Pages/search';
import MainPage from './Pages/mainpage';
import {useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import CarList from './Pages/carlist';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Layout from './Pages/Layout.js';
import Db from './DBs/list.json';
import Favorites from './Pages/favsearch';
import Cars from './Pages/favcarlist'
import axios from 'axios';
import Sewy from './Pages/sewy.js';
import Into from './Pages/intoPage.js';
import emailjs from 'emailjs-com';
import Contact from './Pages/contact.js'
import React, { Component }  from 'react';
import Detail from './Pages/detailedCars.js';

const url = 'http://localhost:8000/teslas'

function App() {
  const [carData,setDCarData]=useState([]);
  const [favCar,setFav]=useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

   const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars', {
        params: { searchQuery, location, maxPrice },
      });
      setDCarData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const favoriteCars= (id)=>{
    try{
      favCar.push(carData.filter(car=>car.id===id));
      setFav(favCar); 
      removeCars(id);
    }
    catch(error){
      console.data(error);
    }
  }

  const removeCars= (id)=>{
    try{
      console.log("invoked")
      const newCars = carData.filter(car => car.id !== id)
      setDCarData(newCars);
    }
    catch(error){
      console.data(error);
    }

  }
  console.log(carData.length)

  const fetchCars = async () => {
    setLoading(true)

    try{
      const response=await fetch(url);
      const carData=await response.json();
      setDCarData(carData);
      setLoading(false)
      console.log(carData);

    }
    catch(error){
      setLoading(false)
      console.data(error);
    }

}

useEffect(()=>{
  fetchCars()
},[])

  return (

    
      <div className="App">
        
        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage carData={carData} setDcarData={setDCarData}/>}/>
          <Route path="/carlist" element={<Bruh carData={carData} removeCars={removeCars} favoriteCars={favoriteCars} setDcarData={setDCarData}/>} />     
          <Route path="/intoPage" element={<Detail removeCars={removeCars} favoriteCars={favoriteCars} />} />

          <Route path="/sewy" element={<Sewy favCar={favCar}/>} />


        </Route>
      </Routes>
    </BrowserRouter>

     </div>


  );

}

export default App;
