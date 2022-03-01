// import React, { useEffect, useState } from 'react';

// const getWeather = async ()=>{
    // let MyCity = 'pune'
    // if(!MyCity){
    //    const {city} = props.route.params
    //    MyCity = city  
    // }
   

//  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pune&APPID=cbdf309ca4a19e361c2406a3908037ba`)
//  .then(data=>data.json())
//  .then(results=>{
//      console.log(results.name);
//     setInfo({
//         name:results.name,
//         temp:results.main.temp,
//         humidity:results.main.humidity,
//         desc:results.weather[0].description,
//         icon:results.weather[0].icon,
//     })
//  })
//  .catch(err=>{
//      alert(err.message)
//  })
// }