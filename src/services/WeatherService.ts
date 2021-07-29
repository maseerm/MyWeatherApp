import {Weather} from '../model/Weather';
// API Key
const key = 'ecc52627999c5bb43d731076ffca7323';
 
if (key === undefined) {
  throw new Error('No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY')
}
const keyQuery = `appid=${key}`
const server = 'http://api.openweathermap.org/data/2.5';
  
//Reading Weather data based on selected location
 export async function readWeather(locationId: number): Promise<Weather> {
    const current = await fetch(`${server}/weather?id=${locationId}&${keyQuery}&units=metric`);
  
    if (current.status !== 200) throw new Error('Failed to read location data');
  
    return await current.json();
  }
 //Get weather icon
  export function getIconUrl(code: string): string {
    return `http://openweathermap.org/img/wn/${code}.png`;
  }