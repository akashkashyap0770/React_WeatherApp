import React, { useEffect, useState } from 'react';
import "./style.css";
import WeatherCard from "./weathercard"

const Temp = () => {

    const [searchValue, setSearchValue] = useState("");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=820b8bd02ba89151b65f9c5a769b24d5`;

            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);

            const { temp, humidity, pressure } = data.main;
            const { main:weatherMood } = data.weather[0];
            const { name:cityName } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            // create our object:-
            const myNewWeatherInfo = {
                temp, humidity, pressure, weatherMood, cityName, speed, country, sunset, 
            };
            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])

  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search" placeholder='Enter Your City...' autoFocus id="search" className='searchInput' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>

    {/* Our WeatherCard Component */}

    <WeatherCard tempInfo= {tempInfo}/>

    </>
  )
}

export default Temp;
