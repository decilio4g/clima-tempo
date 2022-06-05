import { Month } from "helpers/date";
import { dataApi } from "interfaces/components/cardFutureDays.interface";

import "./styles.css";

export function CardFutureDays({ climate }: dataApi) {
  return (
    <div className="future-forecast">
      {climate?.daily?.map((day, index) => {
        if (index === 0) {
          return (
            <div className="today" id="current-temp">
              <img
                width={100}
                alt="weather icon"
                className="w-icon"
                src={`http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png`}
              />

              <div className="other">
                <div className="day">{Month(day.dt, "EEEE")}</div>
                <div className="temp">Dia - {day.temp.day}&#176;C</div>
                <div className="temp">Noite - {day.temp.night}&#176;C</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="weather-forecast" id="weather-forecast">
              <div
                key={index}
                className="weather-forecast"
                id="weather-forecast"
              >
                <div className="weather-forecast-item">
                  <div className="day">{Month(day.dt, "EEE")}</div>
                  <img
                    width={100}
                    alt="weather icon"
                    className="w-icon"
                    src={`http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png`}
                  />
                  <div className="temp">Dia - {day.temp.day}&#176;C</div>
                  <div className="temp">Noite - {day.temp.night}&#176;C</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
