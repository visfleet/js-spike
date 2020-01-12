import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import useData from "./hooks/useData";

jest.mock("./hooks/useData");

beforeEach(() => {
  useData.mockReturnValue(null);
});

it("renders without crashing", () => {
  shallow(<App />);
});
