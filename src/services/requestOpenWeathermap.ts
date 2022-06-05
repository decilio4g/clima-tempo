import axios, { AxiosResponse } from "axios";

import { dataApi } from "interfaces/components/climate.interface";

export const getCurrentClimate = (
  lat: number,
  lng: number
): Promise<AxiosResponse<dataApi>> => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_OPEN_WEATHER}`
  );
};
