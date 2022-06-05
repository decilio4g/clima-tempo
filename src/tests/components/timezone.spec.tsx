import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Timezone } from "components/timezone";

describe("Timezone Component", () => {
  it("get current timezone", () => {
    render(
      <Timezone
        climate={{ timezone: "America", lat: 22.9470084, lon: -47.0553819 }}
      />
    );

    expect(screen.getByText("America")).toBeInTheDocument();
    expect(screen.getByText("22.9470084N-47.0553819E")).toBeInTheDocument();
  });
});
