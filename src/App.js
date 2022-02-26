import React, { useEffect, useState } from 'react';
import WeatherContainer from './WeatherContainer';
import Header from './Header';
import Search from './Search';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'
import './DisplayWeather.css'


function App() {
  const [weather, setWeather] = useState({});
  const [cities, setCities] = useState([])

  useEffect(() => {

  }, [weather]) //components re- render if any dependency changes/ c

  function handleDelete(id) {
    // console.log('delete city', city)
    fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE"
  })    
    const updatedFavorites= cities.filter((city) => city.id !== id)
    setCities(updatedFavorites)
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <Route path="/search">
              <Search setWeather={setWeather} cities={cities} setCities={setCities} />
              <WeatherContainer weather={weather} cities={cities} setCities={setCities} handleDelete={handleDelete} />
            </Route>
            <Route path="/about">
              <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
