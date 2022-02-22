import React, {useEffect, useState} from 'react'

function Search({setWeather}) {
const [searchInput, setSearchInput] = useState("New York")


useEffect(() => {
    getData(searchInput)
}, [])

    function getData() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&APPID=5685f5c2782b520a807b23db45da41b9`)
        .then(res=>res.json())
        .then(data=> {
            // console.log(data)
            setWeather(data)
            setSearchInput("") //clear out input
        })
    }
    
  return (
    <div>
        <input type="text" placeholder="Search city" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
        <button onClick={getData}>Search</button>
        <button>Add to Favorites</button>
    </div>
  )
}

export default Search;
