import React from 'react';

interface ICompassProps{
    windData : {
    speed: number,
        gusts: number,
        angle: number,
}
}
const Compass: React.FC<ICompassProps> = ({windData}): React.JSX.Element => {

    return (
        <div className={"border-2 border-orange-500 bg-orange-500 flex justify-between p-4"}>
            <div className={"text-white"}>
                <h2 className="text-lg font-bold text-center">WIND</h2>
                <p >{windData.speed} KM/H Wind</p>
                <hr/>
                <p >{windData.gusts} KM/H Gusts</p>
            </div>

            <div className="relative w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                <div className="absolute top-1 text-white font-bold">N</div>
                <div className="absolute bottom-1 text-white font-bold">S</div>
                <div className="absolute left-1 text-white font-bold">W</div>
                <div className="absolute right-1 text-white font-bold">E</div>
                <div
                    className="absolute flex flex-col items-center"
                    style={{
                        transform: `rotate(${windData.angle}deg)`,
                        transformOrigin: "50% 50%",
                    }}
                >
                    <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-black"></div>
                    <div className="w-1 h-10 bg-black"></div>
                    <div className="w-2 h-2 border-2 border-black bg-transparent rounded-full mt-1"></div>
                </div>
                <div className="absolute w-3 h-3 bg-white border border-gray-500 rounded-full"></div>
            </div>
        </div>
    );
};

export default Compass;
