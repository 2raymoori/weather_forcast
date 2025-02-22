const hourlyForcastData = require("@/Utils/hourly_forcast.json")
export const dailyForcast = async (placeName:string)=>{
        return hourlyForcastData.hourly.data
}
