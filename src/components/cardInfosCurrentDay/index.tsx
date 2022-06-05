import { Hour } from "helpers/date";
import { currentClimateProps } from "interfaces/components/cardInfosCurrentDay.interface";

import "./styles.css";

export function CardInfosCurrentDay({ currentClimate }: currentClimateProps) {
  return (
    <div className="others" id="current-weather-items">
      <div className="weather-item">
        <div>Humidade</div>
        <div>{currentClimate?.humidity}%</div>
      </div>
      <div className="weather-item">
        <div>Pressão</div>
        <div>{currentClimate?.pressure}</div>
      </div>
      <div className="weather-item">
        <div>Velocidade do vento</div>
        <div>{currentClimate?.wind_speed}</div>
      </div>

      <div className="weather-item">
        <div>Nascer do sol</div>
        <div>{Hour(currentClimate?.sunrise || 0)}</div>
      </div>
      <div className="weather-item">
        <div>Pôr do sol</div>
        <div>{Hour(currentClimate?.sunset || 0)}</div>
      </div>
    </div>
  );
}
