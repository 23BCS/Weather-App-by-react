import React, { useState } from 'react'
import InfoBox from './component/InfoBox'
import SearchBox from './component/SearchBox'

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] =useState({
        city : "Delhi",    
        feelslike:24.84,
        Temp :25.05,
        tempMin :25.05,
        tempMax :25.05,
        humidity :47,
        pressure : 1005,
        weather : "haze"
    });

     let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo)
     }
  return (
    <div>
        <h1>Weather App</h1>
       <SearchBox  updateInfo={updateInfo}/>
<br /><br /><br />

       <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
