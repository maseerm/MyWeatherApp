import React, {FC} from "react";
import {Weather} from "../../model/Weather";
import {getIconUrl} from "../../services/WeatherService";
import './WeatherEntry.css';
import tempIcon from './temp.png'
import humIcon from './humidity.png'

interface WeatherEntryProps {
    weather: Weather;
}

export const WeatherEntry: FC<WeatherEntryProps> = ({weather}) =>
  <div className="weatherContainer" >
           
           <div className="weatherItem"><img src={tempIcon}/><br></br>Temp {weather.main.temp}&deg;C</div> 
           <div className="weatherItem">Feels like<br></br>{weather.main.feels_like}&deg;C</div> 
           {weather.weather.map(condition =>   
            <div className="weatherItem" key={condition.id}>
              <img className="imageIcon" src={getIconUrl(condition.icon)} alt={condition.main}/> <br></br>{condition.main} - {condition.description}
            </div>)}
           <div className="weatherItem">Min/Max temp<br></br>{weather.main.temp_min}&deg;C /{weather.main.temp_max}&deg;C</div> 
           <div className="weatherItem"><img src={humIcon}/><br></br>Humidity {weather.main.humidity}%</div> 
           
  </div>