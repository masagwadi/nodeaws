// Js code goes here

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  
  //get the input value
  const cityInput = document.querySelector("#city");
  const suggestions = document.querySelector("#suggestions");
  const selectedCity =  document.querySelector("#selectedCity");
  const selectedWeather =  document.querySelector("#selectedWeather");
  const selectedStatus =  document.querySelector("#selectedStatus");
  //only cities from Dallas are avialable 
  const cities = ["Cape Town","Durban","Lusaka","Lusiki","Dallas","Aberdeen","Abu Dhabi","Adelaide","Alwar"];
  const urlBase = "https://jsonmock.hackerrank.com/api/weather?name="
  
  function getCity(input){
    const results = [];
    console.log(input)
    for(i =0; i<cities.length; i++){
      if(input.toLowerCase() == cities[i].slice(0,input.length).toLowerCase()){
        results.push(cities[i]);
      }
    }
    return results
  }
  

  //get values on input
  cityInput.oninput = ()=>{
    const userInput = cityInput.value;
    suggestions.innerHTML ="";
    if(userInput.length>0){
        results = getCity(userInput);
        for(i=0;i<results.length;i++){
            suggestions.innerHTML += "<span class='cCity' style='cursor:pointer;border-bottom:1px solid black;'>"+results[i]+"</span><br>";
            console.log(results[i])
        }
    }
  }
  
  //populate the value
  function getWeatherDetails(city){
    let url = urlBase+city;
    console.log(url)
    fetch(url).then(response=>{ return response.json()}).then(obj =>{

        console.log(obj.data);
        if(obj.data.length <1){
            suggestions.innerHTML = "Sory, we don't have data for "+city+"<br>HINT: try: Dallas, Aberdeen,Abu Dhabi,Adelaide, Alwar";
        }else{
            const {name,weather,status} = obj.data[0];
            selectedCity.textContent = name;
            selectedWeather.textContent = weather;
            selectedStatus.textContent = status;
        }
    })
  }

 //When the city is clicked 
 document.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('cCity')){
          const city = e.target.innerText;
          cityInput.value = city;
          suggestions.innerHTML ="";
          debounce(getWeatherDetails(city));
     }
 });






 const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to masagwadi")
})

const port = process.env.port || 4000;
app.listen(port,()=>{
    console.log("wazzup");
});