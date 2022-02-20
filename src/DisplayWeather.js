import React from "react";

function DisplayWeather ({weather}) {
    console.log(weather)
  return (
    <div>
      <ul>
          <li> Current Conditions: {weather.currentConditions.comment}</li>
          <li>{weather.currentConditions.dayhour} </li>
          <li>Temp: </li>
            <ul>    
                <li>C: {weather.currentConditions.temp.c}</li>
                <li>F:{weather.currentConditions.temp.f}</li>
            </ul>
          <li>Precip: {weather.currentConditions.precip}</li>
          <li>Humidity: {weather.currentConditions.humidity}</li>
          <li>Wind</li>
          <ul>    
                <li>Km: {weather.currentConditions.wind.km}</li>
                <li>Mile: {weather.currentConditions.wind.mile}</li>
            </ul>
          <img src={weather.currentConditions.iconURL} alt="Weather"/>
      </ul>
    </div>
  );
}

export default DisplayWeather;
