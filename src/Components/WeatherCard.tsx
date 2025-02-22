import React from 'react';
import {FaCloud} from "react-icons/fa6";

interface IPropsWeatherCard{
    hour:string,
    temperature:string
}
const WeatherCard: React.FC<IPropsWeatherCard> = ({hour,temperature}): React.JSX.Element => {
    return (
        <div className={"border-2 border-orange-500 flex flex-col justify-center items-center gap-1"}>
            <p>{hour}</p>
            <p><FaCloud size={10}/></p>
            <p>{temperature}<sup>o</sup></p>
        </div>
    );
};

export default WeatherCard;
