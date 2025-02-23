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
        <div className={"bg-orange-500 text-white border-orange-500 border-2  p-2 rounded-md flex flex-col justify-between"}>
            <div>
                <p className={"text-center underline font-bold text-sm"}> {title}</p>
                <p>{uvValue}</p>
                <p>Low</p>
            </div>
            <div>
                {showProgressBar && <ProgressBarWithPointer currentReading={uvValue} />}
                <p className={"text-sm"}>{description}</p>
            </div>
        </div>
    );
};

export default UvCard;

