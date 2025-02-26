"use client"

import { FaSearchLocation } from "react-icons/fa";


import { ChangeEvent, useState } from "react";
import { redirect } from "next/navigation";

export default  function Home() {
    const onDashboardRedirect = ()=>{
        console.log('sdfsdwer')
       // navigate('/dashboard')
    }
    const [searchContent,setSearchContent] = useState('')

    const onChangeText = (event:ChangeEvent<HTMLFormElement>)=>{
        // console.log(event.target.value);
        const searchValue = event.target.value;
       // setSearchText(searchValue)
        setSearchContent(searchValue)
    }
    const onFormSubmit = async(e)=>{
            e.preventDefault();
            redirect(`/dashboard?place=${searchContent}`);
    }

  return (
    <div className='h-screen flex justify-center items-center  bg-[url(/WEATHER_bg.jpg)]   bg-cover bg-no-repeat'>
    <div className='flex flex-col justify-center items-center gap-5  w-full bg-orange-300 bg-opacity-50  '>
        <div className=" ">
            <img src={"/WEATHER_bg.jpg"} height={400} width={400}/>
        </div>
        <div className='px-4 rounded-2xl flex items-center  border-2 border-orange-500 '>
        <label htmlFor="search">
        <FaSearchLocation color='orange' size={30}/>
        </label>
        <form onSubmit={onFormSubmit}>
            <input onChange={onChangeText} 
            value={searchContent}
             id='search' 
             type="text" 
             placeholder='SEARCH CITY' 
             className='text-orange-500 font-bold text-xl px-4  py-4 active:border-0   focus:outline-none focus:ring-0 bg-orange-300 ' />
             <button className='bg-orange-500 text-white font-bold px-4  py-4 rounded-xl'>SEARCH</button>
        </form>
    </div>
    </div>
    
</div>
  );
}
