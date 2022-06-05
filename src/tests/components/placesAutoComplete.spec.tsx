import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { PlacesAutocomplete } from "components/placesAutoComplete";

jest.mock("react-router-dom", () => {
  return {
    useNavigate() {
      return {
        navigate: "/",
      };
    },
  };
});

describe("Current Hour and Date", () => {
  it("Show current hour and Date", () => {
    const { container } = render(<PlacesAutocomplete />);

    expect(container.firstChild).toHaveClass("container-input-combobox");
  });
});
