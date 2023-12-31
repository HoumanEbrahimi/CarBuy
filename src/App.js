import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Bruh from './Pages/search';
import MainPage from './Pages/mainpage';
import {useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import CarList from './Pages/carlist';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Layout from './Pages/Layout.js';
import Db from './DBs/list.json';
import Favorites from './Pages/favsearch';
import Cars from './Pages/favcarlist'
import Sewy from './Pages/sewy.js';
import emailjs from 'emailjs-com';
import Contact from './Pages/contact.js'


const url = 'http://localhost:8000/teslas'

function App() {
  const [carData,setDCarData]=useState([]);
  const [favCar,setFav]=useState([])
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
    const newCars = carData.filter(car => car.id !== id)
    setDCarData(newCars);
  }


  const fetchCars = async () => {
    try{
      const response=await fetch(url);
      const carData=await response.json();
      setDCarData(carData);
      //setFav(carData);
      console.log(carData);

    }
    catch(error){
      console.data(error);
    }

}

useEffect(()=>{
  fetchCars();
},[])



  return (
      <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage carData={carData} setDcarData={setDCarData}/>}/>
          <Route path="/carlist" element={<Bruh carData={carData} removeCars={removeCars} favoriteCars={favoriteCars} setDcarData={setDCarData}/>
} />
          <Route path="/sewy" element={<Sewy favCar={favCar}/>} />
          <Route path="/contact" element={<Contact/>} />


        </Route>
      </Routes>
    </BrowserRouter>
      <main>

      </main> 
     </div>


  );

}

export default App;
