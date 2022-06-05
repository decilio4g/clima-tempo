import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Places } from "components/map";

jest.mock("react-router-dom", () => {
  return {
    useLocation() {
      return {
        location: "/",
      };
    },
  };
});

describe("Map Component", () => {
  it("loading map", () => {
    render(<Places />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
