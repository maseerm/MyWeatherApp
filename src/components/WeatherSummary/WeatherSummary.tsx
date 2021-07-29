import React, {FC, useEffect, useState} from "react";
import {WeatherEntry} from "./WeatherEntry";
import {Weather, WeatherLocation} from "../../model/Weather";
import {readWeather} from "../../services/WeatherService";

interface WeatherSummaryProps {
    location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({location}) => {
    const [weather, setWeather] = useState<Weather | null>(null);
        
    useEffect(() => {
        if (location) {
            readWeather(location.id).then(weather => setWeather(weather));
        }
    }, [location]);

    if (!location || !weather) return null;
    return (
        
        <div>
           <WeatherEntry weather={weather}/>
        </div>
    );
};