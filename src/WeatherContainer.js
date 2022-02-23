import React from 'react';
import DisplayWeather from "./DisplayWeather";
import Favorites from "./Favorites"
import "./DisplayWeather.css"

function WeatherContainer({weather, cities, setCities, handleDelete }) {

  return (
    <div className="container">
      <DisplayWeather  weather={weather}/>
     <Favorites cities={cities} setCities={setCities} handleDelete={handleDelete}/>
    </div>
  )
}

export default WeatherContainer;