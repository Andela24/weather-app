import React, {useEffect, useState} from 'react'

function Search({setWeather}) {

    const [searchInput, setSearchInput] = useState("New York")

// // function handleChange(e) {
// //     setSearchInput(e.target.value)
// }
useEffect(() => {
    getData(searchInput)
}, [])

    function getData() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&APPID=cd8959f2d711c030f501590baf4eac4b`)
        .then(res=>res.json())
        .then(data=> {
            // console.log(data)
            setWeather(data)
        })
    }
    
  return (
    <div>
        <input type="text" placeholder="Search city" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></input>
        <button onClick={getData}>Search</button>

    </div>
  )
}

export default Search;
