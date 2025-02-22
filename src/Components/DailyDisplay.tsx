import React from 'react';
import {FaCloudArrowDown} from "react-icons/fa6";
interface IDisplayProps {
    date:string,
    minTemp:number,
    maxTemp:number
}
const DailyDisplay: React.FC<IDisplayProps> = ({date,minTemp,maxTemp}): React.JSX.Element => {
    return (
        <div className={"bg-orange-500 text-white grid grid-cols-2 gap-8 my-2 py-1 px-2 rounded-md"}>
            <div className={"flex justify-between items-center flex-grow-2"}>
                <p>fri</p>
                <FaCloudArrowDown />
            </div>
            <div className={"flex justify-between"}>
                <p>{minTemp}<sup>o</sup></p>
                <p>{maxTemp}<sup>o</sup></p>
            </div>
        </div>
    );
};
export default DailyDisplay;
