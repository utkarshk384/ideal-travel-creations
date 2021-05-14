import Home from "@/pages/index";
import { render } from "../test-utils";

describe("Home Page", () => {
  it("renders without crashing", () => {
    jest.mock("next/router", () => ({
      useRouter() {
        const navLinks = require("@/components/Navbar/NavData");
        const length = navLinks.length;
        const random = Math.floor(Math.random() * length);
        const path = navLinks[random];
        return {
          route: path.href,
          pathname: path.name,
        };
      },
    }));

    const { debug } = render(<Home />, {});

    debug();
  });
});
