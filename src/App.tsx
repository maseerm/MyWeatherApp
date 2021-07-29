import React,{FC, useState} from 'react';
import {Header} from "./components/Header/Header";
import {CityLocation} from "./components/CityLocation/CityLocation";
import {WeatherLocation} from "./model/Weather";
import {WeatherSummary} from "./components/WeatherSummary/WeatherSummary";

const App: FC = () => {
  
  //Setting current location
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);
 
  //Defining return values of App components
  return (
    <div>  
      <Header /> 
      <CityLocation onSelect={location => setCurrentLocation(location)}/>
      <WeatherSummary location={currentLocation}/>                
  </div>
  
  );
}

export default App;
