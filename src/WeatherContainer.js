import React from 'react';
import DisplayWeather from "./DisplayWeather";
import Favorites from "./Favorites"

function WeatherContainer({weather, cities, setCities }) {

  return (
    <div>
      <DisplayWeather  weather={weather}/>
     <Favorites cities={cities} setCities={setCities}/>
    </div>
  )
}

export default WeatherContainer;