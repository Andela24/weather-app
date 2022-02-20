import React, {useEffect, useState} from "react";
import WeatherContainer from "./WeatherContainer"
import Header from "./Header"
import Search from "./Search"
import About from "./About"

function App() {
  const [weather, setWeather] = useState({
    
      "region": "",
      "currentConditions": {
          "dayhour": "",
          "temp": {
              "c": 0,
              "f": 0
          },
          "precip": "0%",
          "humidity": "0%",
          "wind": {
              "km": 0,
              "mile": 0
          },
          "iconURL": "",
          "comment": ""
      },
  })

  useEffect(()=> {

  }, [weather])

 

  return (
    <div className="App">
      <Header />
      <Search setWeather={setWeather}/>
      <WeatherContainer weather={weather} />
      <About />
    </div>
  );
}

export default App;
