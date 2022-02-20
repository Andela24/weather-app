import React from 'react';
import DisplayWeather from "./DisplayWeather";


function WeatherContainer({weather}) {

  return (
    <div>
      <DisplayWeather  weather={weather}/>
     
    </div>
  )
}

export default WeatherContainer;