import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CardInfosCurrentDay } from "components/cardInfosCurrentDay";

jest.mock("react-router-dom", () => {
  return {
    useLocation() {
      return {
        location: "/",
      };
    },
  };
});

describe("Climate Component", () => {
  it("weather information", () => {
    render(<CardInfosCurrentDay />);

    expect(screen.getByText("Humidade")).toBeInTheDocument();
    expect(screen.getByText("Pressão")).toBeInTheDocument();
    expect(screen.getByText("Velocidade do vento")).toBeInTheDocument();
    expect(screen.getByText("Nascer do sol")).toBeInTheDocument();
    expect(screen.getByText("Pôr do sol")).toBeInTheDocument();
  });
});
