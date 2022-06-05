import React from "react";
import { useNavigate } from "react-router-dom";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import { searchProps } from "interfaces/components/placesAutoComplete.interface";

import "./styles.css";

export const PlacesAutocomplete = ({ setSelected }: any) => {
  let navigate = useNavigate();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    navigate(`/?lat=${lat}&lng=${lng}`, {
      state: {
        lat,
        lng,
      },
    });
  };

  return (
    <Combobox className="container-input-combobox" onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        disabled={!ready}
        className="combobox-input"
        placeholder="Pesquise por um endereço."
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }: searchProps) => {
              return <ComboboxOption key={place_id} value={description} />;
            })}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
