import React, {useEffect, useState} from 'react'
//import {fetchWeather} from './fetchWeather';
import axios from 'axios';
import './Weather.css';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

const Weather = ({query}) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        }).then((response) => {
            setWeather(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [query]);

    return (
        <div className="weather__container">
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Weather;
