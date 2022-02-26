import React, {useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import env from "react-dotenv";
import TextField from '@mui/material/TextField';

function Search({setWeather, cities, setCities}) {
    const [searchInput, setSearchInput] = useState("New York")



    useEffect(() => {
        getData(searchInput)
    }, [])

    //To make sure you don't add the same city, do a .find on the array of cities.
    // If it shows up, you could display an error message. 
    // If doesn't, you could go ahead and add it.


    function addFavorites() {
        if(searchInput === "") return null;
        const array = cities.find((city) => {
        return (city.name.toLowerCase() === searchInput.toLowerCase())
        })
        if(array) {
            alert("City already exist.")
            setSearchInput("")
        }
        else {
          fetch(`http://localhost:3000/favorites`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: searchInput
            })
        })
        .then(resp => resp.json())
        .then(data => {
            setCities([...cities, data])
            setSearchInput("")
        })
    }
}
      

    function getData() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&APPID=${env.KEY}`)
        .then(res=>res.json())
        .then(data=> {
            // console.log(data)
            setWeather(data)
            setSearchInput("") //clear out input
        })
    }
    
  return (
    <div>
        <TextField id="outlined-size-small" label="Search City" variant="outlined" type="text" placeholder="Search city" size="small" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        <Button variant="outlined" onClick={getData}>Search</Button>
        <Button variant="outlined" onClick={addFavorites}>Add to Favorites</Button>
    </div>    
    
  )
}

export default Search;
