import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CardFutureDays } from "components/cardFutureDays";

describe("Card Future Days Component", () => {
  it("weather information", () => {
    const { container } = render(<CardFutureDays />);

    expect(container.firstChild).toHaveClass("future-forecast");
  });
});
