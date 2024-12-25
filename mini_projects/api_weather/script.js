document.addEventListener('DOMContentLoaded',(e)=>{
    const cityInput=document.getElementById('city-input')
    const getWeatherButton=document.querySelector('.get-weather-button')
    const information=document.getElementById('weather-info')
    const cityName=document.getElementById('city-name')
    const temperature=document.getElementById('temp')
    const description=document.getElementById('description')
    const error=document.getElementById('error-mess')
    const Api_key="ea2da36906c1ace0d1552010a52a9b64";

    getWeatherButton.addEventListener('click',async ()=>{
            const city=cityInput.value.trim();
            if(!city) return;

            try {
               const weatherData= await fetchWeatherData(city)
               displayWeatherData(weatherData);
            } catch (error) {
                showError();
            }
    })

    async function fetchWeatherData(city){
        //will get the required data
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
        const response=await fetch(url);
        
        if(!response.ok){
            throw new Error("City Not Found");
        }
        const data=await response.json()
        return data;
        
    }

    function displayWeatherData(data){
        //will display the data
        const {name,main,weather}=data;
       cityName.textContent=name;
       temperature.textContent=`Temperature: ${main.temp}`
       description.textContent=`Temperature: ${weather[0].description}`


       information.classList.remove("hidden")
       error.classList.add("hidden")
        
    }

    function showError(){
        information.classList.add("hidden")
       error.classList.remove("hidden")
    }

})
// While making a request from a browser,databse
// 1-It may take time (in other continent)
// 2-it may throw an error (not always give data)

// js was never made to get data from browser(earlier we used XmlHttp request)
// now we use (FETCH API)