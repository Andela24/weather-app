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
        //to avoid CORS error
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://weatherdbi.herokuapp.com/data/weather/${searchInput}`)}`)
        .then(res=>res.json())
        .then(data=> {
            const weatherData=JSON.parse(data.contents)
            setWeather(weatherData)
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
