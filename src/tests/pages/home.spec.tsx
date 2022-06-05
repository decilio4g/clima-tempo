import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Home } from "pages/home";

jest.mock("react-router-dom", () => {
  return {
    useNavigate() {
      return {
        navigate: "/",
      };
    },
  };
});

describe("Map Component", () => {
  it("loading map", () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveClass("App");
  });
});
