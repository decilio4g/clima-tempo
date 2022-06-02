import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "@reach/combobox/styles.css";
import PlacesAutocomplete from "./PlacesAutoComplete";
import "./styles.css";

type PlacesProps = {
  zoom: number;
  latitude: number;
  longitude: number;
};

type SelectedProps = {
  lat: number;
  lng: number;
};

export default function Places({ zoom, latitude, longitude }: PlacesProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY || "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map zoom={zoom} latitude={latitude} longitude={longitude} />;
}

function Map({ zoom, latitude, longitude }: PlacesProps) {
  useEffect(() => {
    setSelected({
      lat: latitude,
      lng: longitude,
    });
  }, [latitude, longitude]);

  const [selected, setSelected] = useState<SelectedProps>();

  return (
    <div className="wrapper-map">
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={zoom}
        center={selected}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </div>
  );
}
