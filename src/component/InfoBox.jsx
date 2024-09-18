import React from 'react'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function InfoBox({info}) {
   
  return (
    <div className='InfoBox'>
    
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="assets\images.jpg"
        title="cool weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p> Temperature ={info.Temp}&deg;C</p>
         <p>Humidity :{info.humidity}</p> 
         <p>Min Temperature  :{info.tempMin}&deg;C</p> 
         <p>Max Temperature  :{info.tempMax}&deg;C</p> 
         <p>Pressure  :{info.pressure}</p> 
         <p>
            The weather can be described as <i>{info.weather.toUpperCase()}</i> and 
            Feels Like  :{info.feelslike}&deg;C</p> 
         
        </Typography>
      </CardContent>
        </Card>  
    </div>
  )
}

export default InfoBox
