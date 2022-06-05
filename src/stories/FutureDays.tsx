import "./futureDays.css";

import { dataApi } from "interfaces/stories/futureDays.interface";

interface FutureDaysProps {
  currentClimate: dataApi;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  colorDay?: string;
  backgroundColorDay?: string;
}

export const FutureDays = ({
  currentClimate,
  backgroundColor,
  color,
  borderColor,
  colorDay,
  backgroundColorDay,
  ...props
}: FutureDaysProps) => {
  return (
    <div className="future-forecast" style={{ backgroundColor }} {...props}>
      {currentClimate === undefined ? (
        <>
          <div style={{ borderColor }} className="today" id="current-temp">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="w-icon"
            />
            <div className="other">
              <div
                style={{
                  backgroundColor: backgroundColorDay,
                  color: colorDay,
                }}
                className="day"
              >
                Monday
              </div>
              <div style={{ color }} className="temp">
                Night - 25.6&#176; C
              </div>
              <div style={{ color }} className="temp">
                Day - 35.6&#176; C
              </div>
            </div>
          </div>
          <div className="weather-forecast" id="weather-forecast">
            <div style={{ borderColor }} className="weather-forecast-item">
              <div
                style={{
                  backgroundColor: backgroundColorDay,
                  color: colorDay,
                }}
                className="day"
              >
                Tue
              </div>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather icon"
                className="w-icon"
              />
              <div style={{ color }} className="temp">
                Night - 25.6&#176; C
              </div>
              <div style={{ color }} className="temp">
                Day - 35.6&#176; C
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {currentClimate.climate?.daily?.map((item, index) => {
            if (index === 0) {
              return (
                <div
                  style={{ borderColor }}
                  className="today"
                  id="current-temp"
                >
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="weather icon"
                    className="w-icon"
                  />
                  <div className="other">
                    <div
                      style={{
                        backgroundColor: backgroundColorDay,
                        color: colorDay,
                      }}
                      className="day"
                    >
                      Monday
                    </div>
                    <div style={{ color }} className="temp">
                      Dia - {item.temp?.day}&#176; C
                    </div>
                    <div style={{ color }} className="temp">
                      Noite - {item.temp?.night}&#176; C
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="weather-forecast" id="weather-forecast">
                  <div
                    style={{ borderColor }}
                    className="weather-forecast-item"
                  >
                    <div
                      style={{
                        backgroundColor: backgroundColorDay,
                        color: colorDay,
                      }}
                      className="day"
                    >
                      Tue
                    </div>
                    <img
                      src="http://openweathermap.org/img/wn/10d@2x.png"
                      alt="weather icon"
                      className="w-icon"
                    />
                    <div style={{ color }} className="temp">
                      Dia - {item.temp?.day}&#176; C
                    </div>
                    <div style={{ color }} className="temp">
                      Noite - {item.temp?.night}&#176; C
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};
