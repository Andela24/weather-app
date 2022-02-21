import React from "react";


function DisplayWeather ({weather}) {
    console.log(weather)
  return (
    <div>
      <table className="container">
        <tr>
          <th>City</th>
          <th>Temp</th>
          <th>Current Condition</th>
          <th>Feels Like</th>
          <th>Humidity</th>
          <th>Wind</th>
          <th>Weather</th>

        </tr>

        <tr>
          <td>{weather?.name}</td>
          <td>{weather?.main?.temp} F</td>
          <td>{weather?.weather?.[0].description}</td>
          <td>{weather?.main?.feels_like}</td>
          <td>{weather?.main?.humidity}</td>
          <td>{weather?.wind?.speed}</td>
          <td><img src={`.src/icons/${weather?.weather?.[0].icon}.png`} alt="pic"/></td>
         

        </tr>

      </table>

        {/* <h1>{weather.name} </h1>
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
      </ul> */}
    </div>
  );
}

export default DisplayWeather;
