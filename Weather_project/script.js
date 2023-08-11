const api_key = "2f0de490880c845b176f6c9e42023397";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const search_box=document.querySelector(".search input");
  const search_btn=document.querySelector(".search button");
async function Checkweather(city) {
  const response = await fetch(api_url +city + `$appid=${api_key}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
  document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/h";
}
search_btn.addEventListener("click",()=>{
    
Checkweather(search_box.value);

})

