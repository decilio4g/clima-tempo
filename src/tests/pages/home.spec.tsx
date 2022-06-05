import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Home } from "pages/home";

jest.mock("react-router-dom", () => {
  return {
    useLocation() {
      return {
        location: "/",
      };
    },
    useNavigate() {
      return {
        navigate: "/",
      };
    },
  };
});

describe("Home Component", () => {
  it("Get first child", () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveClass("App");
  });
});
