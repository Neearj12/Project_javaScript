const inputBox= document.querySelector('.input_box');
const searchbtn=document.getElementById('searchbtn'); 
const weatherimg=document.querySelector('.weather_img');
const temp=document.querySelector('.temp');
const dis=document.querySelector('.discription');
const humidity=document.querySelector('#humidity');
const wind_speed=document.getElementById('wind_speed');
const location_not_found=document.querySelector('.location_not_found');
const weather_body=document.querySelector('.weather_body');

  async function checkweather(city){
const api_key="2f0de490880c845b176f6c9e42023397";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weather_data=await fetch(`${url}`).then(response=>response.json());
if(weather_data.cod===`404`){
  location_not_found.style.display="flex";
  weather_body.style.display="none";

  return;
}
weather_body.style.display="flex";
location_not_found.style.display="none";
temp.innerHTML=`${Math.round( weather_data.main.temp-273.15)}°C`;
dis.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
  case 'Clouds':
    weatherimg.src="/Weather_project2/assest/cloud.png";
    break; 
    case 'Clear':
      weatherimg.src="/Weather_project2/assest/clear.png";
      break; 
      case 'Rain':
        weatherimg.src="/Weather_project2/assest/rain.png";
        break; 
        case 'Mist':
          weatherimg.src="/Weather_project2/assest/mist.png";
          break; 
          case 'Snow':
            weatherimg.src="/Weather_project2/assest/snow.png";
            break; 
        
}
  }
 searchbtn.addEventListener('click',()=>{
checkweather(inputBox.value);
 });