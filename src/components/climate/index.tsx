import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentClimate } from "services/requestOpenWeathermap";

import { Timezone } from "components/timezone";
import { CardInfosCurrentDay } from "components/cardInfosCurrentDay";
import { CurrentHourAndDate } from "components/currentHourAndDate";
import { CardFutureDays } from "components/cardFutureDays";

import {
  locationProps,
  dataApi,
  currentClimateProps,
} from "interfaces/components/climate.interface";

import "./styles.css";

export function Climate() {
  let location = useLocation();
  const { state } = location as locationProps;

  const [climate, setClimate] = useState<dataApi>();
  const [currentClimate, setCurrentClimate] = useState<currentClimateProps>();

  useEffect(() => {
    if (state !== null) {
      setTimeout(() => {
        getCurrentClimate(state.lat, state.lng)
          .then((data) => {
            setCurrentClimate(data?.data.current);
            setClimate(data?.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, 500);
    }
  }, [state]);

  return (
    <>
      <div className="container">
        <div className="current-info">
          <div className="date-container">
            <CurrentHourAndDate />
            <CardInfosCurrentDay currentClimate={currentClimate} />
          </div>
          <Timezone climate={climate} />
        </div>
      </div>
      <CardFutureDays climate={climate} />
    </>
  );
}
