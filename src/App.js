import React, { useEffect, useState } from 'react';
import WeatherContainer from './WeatherContainer';
import Header from './Header';
import Search from './Search';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'

function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {}, [weather]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
            <Route path="/search">
              <Search setWeather={setWeather} />
              <WeatherContainer weather={weather} />
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
