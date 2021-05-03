import Affiliations from "@/pages/home/_affiliations";
import { render } from "../../test-utils";

describe("Home-Affliations", () => {
  it("renders without crashing", () => {
    const { debug } = render(<Affiliations />, {});

    debug();
  });
});
