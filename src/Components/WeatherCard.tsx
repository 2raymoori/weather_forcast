import React from 'react';
import {FaCloud} from "react-icons/fa6";
import IconSelector from "@/Components/IconSelector";
interface IPropsWeatherCard{
    hour:string,
    temperature:string,
    weather:string
}
const WeatherCard: React.FC<IPropsWeatherCard> = ({weather,hour,temperature}): React.JSX.Element => {
    return (
        <div className={" text-white py-2 rounded-md bg-orange-500 flex flex-col justify-center items-center gap-1 w-[10%]"}>
            <p>{hour}</p>
            <p><IconSelector iconName={weather} /></p>
            <p>{temperature}<sup>o</sup></p>
        </div>
    );
};
export default WeatherCard;
