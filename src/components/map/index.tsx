import "@reach/combobox/styles.css";
import "./styles.css";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SelectedProps,
  locationProps,
} from "interfaces/components/map.interface";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { PlacesAutocomplete } from "components/placesAutoComplete";

export function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY_MAPS || "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  let location = useLocation();
  const { state } = location as locationProps;

  const [selected, setSelected] = useState<SelectedProps>();

  useEffect(() => {
    if (state !== null) {
      setTimeout(() => {
        setSelected({
          lat: state.lat,
          lng: state.lng,
        });
      }, 500);
    }
  }, [state]);

  return (
    <div className="wrapper-map">
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={12}
        center={selected}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </div>
  );
}
