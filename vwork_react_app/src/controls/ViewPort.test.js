import React from "react";
import { shallow } from "enzyme";

import ViewPort from "./ViewPort";

// Some AMD styled modules require a whole module mock
jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "/jobs",
  }),
}));

it("renders", () => {
  shallow(<ViewPort navItems={[]} children={<>TODO</>} />);
});
