import React from 'react';
import DisplayWeather from "./DisplayWeather";
import Favorites from "./Favorites"

function WeatherContainer({weather}) {

  return (
    <div>
      <DisplayWeather  weather={weather}/>
     <Favorites />
    </div>
  )
}

export default WeatherContainer;