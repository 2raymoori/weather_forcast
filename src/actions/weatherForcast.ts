const dailyForecastData = require("@/Utils/daily.json")
const hourlyForcastData = require("@/Utils/hourly_forcast.json")
const curPlace = require("@/Utils/place.json")

const options = {
        method: 'GET',
        headers: {
                'x-rapidapi-key': '8ecaf107fcmshc9b7613293c1a72p1519c9jsn18e93f8cb42b',
                'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
};
const baseURL = 'https://ai-weather-by-meteosource.p.rapidapi.com/';
export const hourlylyForcast = async (cityName:string)=>{
    //return hourlyForcastData.hourly.data
    
    const url = `${baseURL}hourly?place_id=${cityName}&timezone=auto&language=en&units=auto`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result.hourly.data;//.splice(0,19);
    } catch (error) {
        console.error(error);
    }
    
    //    
}

export const dailyForcast = async(cityName:string)=>{
    //return dailyForecastData.daily.data.slice(0,10)
    
    const url = `${baseURL}daily?place_id=${cityName}&language=en&units=auto`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.daily.data.slice(0,10)
    } catch (error) {
        console.error(error);
    }
       // 
}
export const placeDetails = async(cityName:string)=>{
    //return curPlace
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${cityName}&language=en`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8ecaf107fcmshc9b7613293c1a72p1519c9jsn18e93f8cb42b',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}
