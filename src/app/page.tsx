import Image from "next/image";
import WeatherCard from "@/Components/WeatherCard";
import {hourExtractor} from "@/Utils/helpers";
import AirQuality from "@/Components/AirQuality";
import {dailyForcast, hourlylyForcast} from "@/actions/weatherForcast";
import SeverityIndicator from "@/Components/SI";
import ProgressBarWithPointer from "@/Components/ProgressBarPointer";
import DailyDisplay from "@/Components/DailyDisplay";
import UvCard from "@/Components/UvCArd";
import Compass from "@/Components/Compass";



export default async function Home() {
    const dailyForecastData = await  dailyForcast("potsdam");
    const hourlyForcastData = await hourlylyForcast("potsdam");


  return (
      <main className={"border-2 border-orange-500 max-w-5xl m-auto grid grid-cols-6 gap-2"}>
          <section className={"border-4 border-blue-500 col-start-1 col-end-7  bg-orange-500  justify-center"}>
              <div className={"border-white border-2 text-center"}>
                  <p>Potsdam</p>
                  <p>1<sup>o</sup></p>
                  <p>Mostly Cloudy</p>
                  <p>H:3<sup>o</sup> L:-6<sup>o</sup></p>
              </div>
          </section>
          <section className={"border-4 border-blue-500 col-start-1 col-end-3"}>
              <p>Row 2</p>
              <p>{hourlyForcastData.length}</p>
                <AirQuality level={50} />

          </section>
          <section className={"border-4 border-blue-500 col-start-3 col-end-7"}>
              <p>HOURLY FORECAST</p>
              <div className={"flex justify-around flex-wrap"}>
                  {
                      hourlyForcastData.slice(0,18).map(e=>{
                          return(
                              <WeatherCard key={e.date} hour={hourExtractor(e.date)} temperature={e.temperature} />

                          )
                      })
                  }
              </div>
          </section>
          <section className={"border-4 border-blue-500 col-start-1 col-end-3"}>
              <div>
                  {dailyForecastData.map(e=>{
                      return(
                          <DailyDisplay key={e.day} date={e.day} minTemp={e.temperature_min} maxTemp={e.temperature_max} />
                      )
                  })}
              </div>
          </section>
          <section className={"border-4 border-blue-500 col-start-3 col-end-7"}>
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
