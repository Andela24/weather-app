import React from "react";
import img01d from "./icons/01d.png";
import img01n from "./icons/01n.png";
import img02d from "./icons/02d.png";
import img02n from "./icons/02n.png";
import img03d from "./icons/03d.png";
import img03n from "./icons/03n.png";
import img04d from "./icons/04d.png";
import img04n from "./icons/04n.png";
import img09d from "./icons/09d.png";
import img09n from "./icons/09n.png";
import img10d from "./icons/10d.png";
import img10n from "./icons/10n.png";
import img11d from "./icons/11d.png";
import img11n from "./icons/11n.png";
import img13d from "./icons/13d.png";
import img13n from "./icons/13n.png";
import img50d from "./icons/50d.png";
import img50n from "./icons/50n.png";
 
 
function DisplayWeather({ weather }) {
 console.log(weather)
 
 function imageFinder() {
   let weatherImage = weather?.weather?.[0].icon
   switch (weatherImage) {
     case "01d":
       return img01d
     case "01n":
       return img01n
     case "02d":
       return img02d
     case "02n":
       return img02n
     case "03d":
       return img03d
     case "03n":
       return img03n
     case "04d":
       return img04d
     case "04n":
       return img04n
     case "09d":
       return img09d
     case "09n":
       return img09n
     case "10d":
       return img10d
     case "10n":
       return img10n
     case "11d":
       return img11d
     case "11n":
       return img11n
     case "13d":
       return img13d
     case "13n":
       return img13n
     case "50d":
       return img50d
     case "50n":
       return img50n
 
     default:
       return img50n;
       
   }
 }
 
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
         <img src={imageFinder()} alt="pic" />
       </tr>
 
     </table>

    </div>
  );
}

export default DisplayWeather;
