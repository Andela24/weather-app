import React, { useEffect, useState } from 'react';
import DisplayWeather from './DisplayWeather';
import env from 'react-dotenv';
import "./DisplayWeather.css"
import Button from '@mui/material/Button';
import LikeBtn from './LikeBtn';

function Favorites({ cities, setCities, handleDelete }) {
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    fetch('http://localhost:3000/favorites')
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  function getData(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${env.KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  }



  const favoriteCities = cities.map((city) => {
    return (
      <li key={city.id}>
        <button className="link" onClick={() => getData(city.name)}>{city.name}</button>
        <Button variant="secondary" size="small" onClick={() => handleDelete(city.id)}>Delete</Button>
        <LikeBtn />
      </li>
    );
  });
  

  return (
    <div>
      <h1>Favorites: </h1>

      {favoriteCities}
      {weather && <DisplayWeather weather={weather} />}
      
    </div>
  );
}

export default Favorites;
