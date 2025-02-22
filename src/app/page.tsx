import Image from "next/image";
import {dailyForcast} from "@/actions/weatherForcast";

export default async function Home() {
    const hourlyForcastData = await dailyForcast("potsdam");
  return (
      <main className={"border-2 border-orange-500 max-w-5xl m-auto h-[500px] grid grid-cols-6 gap-2"}>
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

          </section>
          <section className={"border-4 border-blue-500 col-start-3 col-end-7"}>
              {
                  hourlyForcastData.slice(0,18).map(e=>{
                      return(
                          <p>{e.temperature} :: {e.date}</p>
                      )
                  })
              }

          </section>
          <section className={"border-4 border-blue-500 col-start-1 col-end-3"}>
              <p>Column 1</p>
          </section>
          <section className={"border-4 border-blue-500 col-start-3 col-end-5"}>
              <p>Column 2</p>
          </section>
          <section className={"border-4 border-blue-500 col-start-5 col-end-7"}>
              <p>Column 3</p>
          </section>

      </main>
  );
}
