import React from 'react';
import {IoCloudy, IoPartlySunny} from "react-icons/io5";
import Image from "next/image";
import overcastImg  from "@/assets/images/overcast.svg"
import {IoMdSunny} from "react-icons/io";
interface IIconSelectorProps{
    iconName:string
}
const IconSelector: React.FC<IIconSelectorProps> = ({iconName}): React.JSX.Element => {
    switch (iconName){
        case "cloudy":
            return <IoCloudy size={30} />
        case "sunny":
            return <IoMdSunny size={30} />
        case "overcast":
            return <Image src={overcastImg} alt={"sfs"} width={30} /> ;
        default:
            return <IoPartlySunny size={30} />
    }

};

export default IconSelector;
