import { useState, useEffect } from "react";
import "./App.css";
import Mapa from "./components/map";
import Climate from "./components/climate";

function App() {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <Climate />
      <Mapa zoom={12} latitude={coords.latitude} longitude={coords.longitude} />
    </div>
  );
}

export default App;
