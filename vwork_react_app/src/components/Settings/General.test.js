import React from "react";
import { shallow } from "enzyme";

import useData from "~/hooks/useData";

import General from "./General";

jest.mock("../../hooks/useData");

beforeEach(() => {
  useData.mockReturnValue({});
});

it("renders", () => {
  shallow(<General />);
});
