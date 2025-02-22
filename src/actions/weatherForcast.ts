const dailyForecastData = require("@/Utils/daily.json")
const hourlyForcastData = require("@/Utils/hourly_forcast.json")
export const hourlylyForcast = async (placeName:string)=>{
        return hourlyForcastData.hourly.data
}

export const dailyForcast = async(placeName:string)=>{
        return dailyForecastData.daily.data.slice(0,10)
}
