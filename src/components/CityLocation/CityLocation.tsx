import React, {FC} from "react";
import {WeatherLocation} from "../../model/Weather";
import './CityLocation.css';

interface CityLocationProps {
   onSelect: (location: WeatherLocation) => void;
}
//Defining capital city id, name as per Open Weather API
let cityLocations:  WeatherLocation[]=[{ id:2078025, name: 'Adelaide'}, { id:2174003, name: 'Brisbane'}, { id:2172517, name: 'Canberra'} ,
{ id:2073124, name: 'Darwin'}, { id:2163355, name: 'Hobart'}, { id:2158177, name: 'Melbourne'},
{ id:2063523, name: 'Perth'}, { id:2147714, name: 'Sydney'}
];

//Defining functional component to display the cities
export const CityLocation: FC<CityLocationProps> = ({ onSelect}) =>
<div>
<div className="textContainer">Please select a city to view the weather infomation</div>
<div className="locationContainer" >
            {
             cityLocations.map(location => {             
                return (
                    <div key={location.id}>
                    <button onClick={() => onSelect(location)}  value={location.id} >{location.name} </button>
                    </div>
                );
              })
            }
        </div>
</div>