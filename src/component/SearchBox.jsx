 import React, { useState } from 'react'
 import TextField from '@mui/material/TextField'; 
 import Button from '@mui/material/Button';
 import SendIcon from '@mui/icons-material/Send';
 
 function SearchBox({updateInfo}) {
const API_URL ="https://api.openweathermap.org/data/2.5/weather";
const API_KEY ="f4ba91bdc5b58f06223417c9a8fc359d";

const getWeatherInfo = async()=>{
     let  response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}`);
     let jsonResponse =await response.json();
    //  console.log(jsonResponse)
     let result ={
        city: city,
        Temp : jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        pressure : jsonResponse.main.pressure,
        weather : jsonResponse.weather[0].description,
        
     }
     console.log(result)
      return result 
}




 const[city, setCity]=useState("")

  const handleChange = (event)=>{
    setCity(event.target.value);
  };
    const handleSubmit = async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("")
        let newInfo =await getWeatherInfo(); 
        updateInfo(newInfo)
    }

   return (
     <div> 
      <form onSubmit={handleSubmit} >
      <TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={handleChange} required/>
      <br /><br />
      <Button variant="contained" size="large"  type='submit' endIcon={<SendIcon />}  >
        Search
      </Button>
      </form>
     </div>
   )
 }
 
 export default SearchBox
 




