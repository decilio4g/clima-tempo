import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CurrentHourAndDate } from "components/currentHourAndDate";

jest.mock("react-router-dom", () => {
  return {
    useLocation() {
      return {
        location: "/",
      };
    },
  };
});

describe("Current Hour and Date", () => {
  it("Show current hour and Date", () => {
    const { container } = render(<CurrentHourAndDate />);

    expect(container.firstChild).toHaveClass("time");
  });
});
