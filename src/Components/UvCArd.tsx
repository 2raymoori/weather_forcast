import React from 'react';
import ProgressBarWithPointer from "@/Components/ProgressBarPointer";

interface IUVProps{
    uvValue:number
    showProgressBar?:boolean,
    title:string,
    description:string
}
const UvCard: React.FC<IUVProps> = ({description,title,uvValue,showProgressBar}): React.JSX.Element => {
    return (
        <div className={"border-orange-500 border-2  p-2 rounded-md flex flex-col justify-between"}>
            <div>
                <p> {title}</p>
                <p>{uvValue}</p>
                <p>Low</p>
            </div>
            <div>
                {showProgressBar && <ProgressBarWithPointer currentReading={uvValue} />}
                <p>{description}</p>
            </div>
        </div>
    );
};

export default UvCard;

