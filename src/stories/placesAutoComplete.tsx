import "./futureDays.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "./placesAutoComplete.css";

interface PlacesAutoCompleteProps {
  borderColor?: string;
  border?: boolean;
}

export const PlacesAutoComplete = ({
  borderColor,
  border,
  ...props
}: PlacesAutoCompleteProps) => {
  return (
    <div className="places-container" {...props}>
      <Combobox onSelect={() => {}}>
        <ComboboxInput
          value={"value"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          disabled={false}
          style={{ border: `${border ? `1px solid ${borderColor}` : ""}` }}
          className="combobox-input"
          placeholder="Pesquise por um endereço."
        />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption key={1} value={"desdede"} />;
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
};
