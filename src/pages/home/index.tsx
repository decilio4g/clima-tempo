import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Places } from "components/map";
import { Climate } from "components/climate";

export function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        navigate(
          `/?lat=${position.coords.latitude}&lng=${position.coords.longitude}`,
          {
            state: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }
        );
      });
    }
  }, [navigate]);

  return (
    <div className="App">
      <Places />
      <Climate />
    </div>
  );
}
