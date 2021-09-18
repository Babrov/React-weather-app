import { CoordinatesModel } from "./coordinates.model";


export interface MainModel {
  "temp": number,
  "feels_like": number,
  "temp_min": number,
  "temp_max": number,
  "pressure": number,
  "humidity": number
}

export interface WeatherModel {
  "id": number,
  "main": string,
  "description": string,
  "icon": string
}

export interface WindModel {
  "speed": number,
  "deg": number,
  "gust": number
}

export interface SysModel {
  "type": number,
  "id": number,
  "country": string,
  "sunrise": number,
  "sunset": number
}

export interface WeatherResponseModel {
  "coord": CoordinatesModel,
  "weather": WeatherModel[],
  "main": MainModel,
  "wind": WindModel,
  "sys": SysModel,
  "timezone": number,
  "id": number,
  "cod": number,
  "dt": number,
  "visibility": number,
  "name": string,
  "base": string,
  "rain": {
    "1h": number
  },
  "clouds": {
    "all": number
  },
}