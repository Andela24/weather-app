import React, { useEffect, useState } from 'react';
import DisplayWeather from './DisplayWeather';
import env from 'react-dotenv';
import "./DisplayWeather.css"

function Favorites({ cities, setCities, handleDelete }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/favorites')
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  function getData(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${env.KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setWeather(data);
      });
  }
      

  const favoriteCities = cities.map((city) => {
    return (
      <li key={city.id}>
        <button className="link" onClick={() => getData(city.name)}>{city.name} </button>
        {/* <a href="#" onClick={() => getData(city.name)}>
          {city.name}
        </a> */}
        <button onClick={() => handleDelete(city.id)}>Delete</button>
      </li>
    );
  });
   //handle delete should delete from db.json
   //should delete from the dom
   //change the state,remove from state and re-render

   //fetch from db.json
   //where handleDelete should leave

  return (
    <div>
      <h1>Favorites: </h1>
      {favoriteCities}
      {weather ? <DisplayWeather weather={weather} /> : null}
    </div>
  );
}

export default Favorites;
