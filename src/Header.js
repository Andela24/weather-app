import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import "./DisplayWeather.css"

function Header() {

  return (
    <div>
      <h1>Weather App</h1>
      <Link to= "/" ><Button variant="text">Home</Button></Link>
      <Link to= "/search" ><Button variant="text">Search</Button></Link>
      <Link to= "/about" ><Button variant="text">About</Button></Link>
     
    </div>
    
  )
}

export default Header;

