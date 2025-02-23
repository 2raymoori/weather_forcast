"use client"
import WeatherCard from "@/Components/WeatherCard";
import {hourExtractor} from "@/Utils/helpers";
import AirQuality from "@/Components/AirQuality";
import {dailyForcast, hourlylyForcast} from "@/actions/weatherForcast";
import DailyDisplay from "@/Components/DailyDisplay";
import UvCard from "@/Components/UvCArd";
import Compass from "@/Components/Compass";
import {FaCalendar, FaSearch, FaSearchLocation} from "react-icons/fa";
import {useState} from "react";
export default  function Home() {
    const [dailyForecastData,setDailyForecastData] = useState([]);
    const [hourlyForcastData,sethHurlyForcastData] = useState([]);
    const [loading,setLoading] = useState(true)
    const onLoad = async() =>{
        const dailyForecastData = await  dailyForcast("potsdam");
        const hourlyForcastData = await hourlylyForcast("potsdam");
    }
  return (
      <main className={" max-w-5xl m-auto grid grid-cols-6 gap-2"}>
          <div className={"col-start-1 col-end-7 flex flex-row-reverse"}>
              <div className={"border-2 border-orange-500 rounded-xl  flex items-center"}>
                  <input placeholder={"Place Search"}
                         className={"rounded-xl py-2 pl-2 "}/>
                  <button className={"border-2 py-2" }>
                      <FaSearchLocation size={30}/>
                  </button>
              </div>
          </div>
          <section className={"border-2 border-orange-500 col-start-1 col-end-7  bg-orange-500  justify-center"}>
              <div className={"border-white border-2 text-center"}>
              <p>Potsdam</p>
                  <p>1<sup>o</sup></p>
                  <p>Mostly Cloudy</p>
                  <p>H:3<sup>o</sup> L:-6<sup>o</sup></p>
              </div>
          </section>
          <section className={"border-2 border-orange-500 col-start-1 col-end-3"}>
                <AirQuality level={50} />
          </section>
          <section className={"border-2 border-orange-500 col-start-3 col-end-7"}>
              <p>HOURLY FORECAST</p>
              <div className={"flex justify-around flex-wrap gap-2"}>
                  {
                      hourlyForcastData.slice(0,18).map(e=>{
                          return(
                              <WeatherCard weather={e.weather} key={e.date} hour={hourExtractor(e.date)} temperature={e.temperature} />
                          )
                      })
                  }
              </div>
          </section>
          <section className={"border-2 border-orange-500 col-start-1 col-end-3"}>
              <div>
                  <h1 className={"justify-center text-center flex items-center gap-2 text-orange-500"}><FaCalendar /> 10-DAY FORECAST</h1>
                  {dailyForecastData.map(e=>{
                      return(
                          <DailyDisplay weatherDescription = {e.weather} key={e.day} date={e.day} minTemp={e.temperature_min} maxTemp={e.temperature_max} />
                      )
                  })}
              </div>
          </section>
          <section className={"border-2 border-orange-500 col-start-3 col-end-7"}>
              <div className={"grid grid-cols-3 gap-2"}>
                  <Compass windData={dailyForecastData[0].wind} />
                  <UvCard description={"Low for the rest of the day."} uvValue={hourlyForcastData[0].uv_index} title={"UV INDEX"} showProgressBar={true} />
                  <UvCard description={"The dew point is -5 right now."} uvValue={`${dailyForecastData[0].humidity}%`} title={" HUMIDITY"} />
                  <UvCard uvValue={`${dailyForecastData[0].visibility} KM`} description={"Perfectly clear view"}  title={"VISIBILITY"} />
                  <UvCard uvValue={dailyForecastData[0].feels_like} description={"Wind is making it feel colder"} title={"FEELS LIKE"} />
                  <UvCard uvValue={dailyForecastData[0].precipitation.total+' MM'} description={"Wind is making it feel colder"} title={"FEELS LIKE"} />
              </div>
          </section>
      </main>
  );
}
