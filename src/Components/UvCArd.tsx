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
        <div className={"border-orange-500 border-2 w-[50%] p-2 rounded-md"}>
            <p> {title}</p>
            <p>{uvValue}</p>
            <p>Low</p>
            {showProgressBar && <ProgressBarWithPointer currentReading={uvValue} />}
            <p>{description}</p>
        </div>
    );
};

export default UvCard;
