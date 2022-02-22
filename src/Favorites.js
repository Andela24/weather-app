import React, { useEffect, useState } from 'react';
import DisplayWeather from "./DisplayWeather";

function Favorites({cities, setCities}) {
const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/favorites")
    .then(res => res.json())
    .then(data => setCities(data))
  }, [])

  function getData(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=5685f5c2782b520a807b23db45da41b9`)
    .then(res=>res.json())
    .then(data=> {
        // console.log(data)
        setWeather(data)
        
    })
  }


const favoriteCities = cities.map(city => {
  return <li key={city.id} onClick={() => getData(city.name)}>{city.name}</li>
})
  return (
    
    <div>
      <h1>Favorites: </h1>
     {favoriteCities} 
     { weather ?
     <DisplayWeather weather={weather}/> :
     null
     }
     
    </div>
  )
}

export default Favorites;