import "./card.css";

import { currentClimateProps } from "interfaces/stories/card.interface";

interface CardInfosCurrentDayProps {
  currentClimate: currentClimateProps;
  backgroundColor?: string;
  color?: string;
}

export const CardInfosCurrentDay = ({
  currentClimate,
  backgroundColor,
  color,
  ...props
}: CardInfosCurrentDayProps) => {
  return (
    <div
      className="others"
      style={{ backgroundColor }}
      id="current-weather-items"
      {...props}
    >
      <div className="weather-item">
        <div>
          <span style={{ color }} className="item">
            Humidade
          </span>
        </div>
        <div>
          <span style={{ color }} className="item">
            {currentClimate?.humidity}%
          </span>
        </div>
      </div>
      <div className="weather-item">
        <div>
          <span style={{ color }} className="item">
            Pressão
          </span>
        </div>
        <div>
          <span style={{ color }} className="item">
            {currentClimate?.pressure}
          </span>
        </div>
      </div>
      <div className="weather-item">
        <div>
          <span style={{ color }} className="item">
            Velocidade do vento
          </span>
        </div>
        <div>
          <span style={{ color }} className="item">
            {currentClimate?.wind_speed}
          </span>
        </div>
      </div>

      <div className="weather-item">
        <div>
          <span style={{ color }} className="item">
            Nascer do sol
          </span>
        </div>
        {/* <div>{Hour(currentClimate?.sunrise || 0)}</div> */}
      </div>
      <div className="weather-item">
        <div>
          <span style={{ color }} className="item">
            Pôr do sol
          </span>
        </div>
        {/* <div>{Hour(currentClimate?.sunset || 0)}</div> */}
      </div>
    </div>
  );
};
