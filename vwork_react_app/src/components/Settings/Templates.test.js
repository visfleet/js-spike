import React from "react";
import { shallow } from "enzyme";

import useData from "../../hooks/useData";

import Templates from "./Templates";

jest.mock("../../hooks/useData");

it("renders without data", () => {
  useData.mockReturnValue();
  shallow(<Templates />);
});

it("renders with data", () => {
  useData.mockReturnValue({
    templates: [
      {
        id: 1,
        name: "foo",
      },
      {
        id: 2,
        name: "foo",
        customer: {
          id: 1,
          name: "John",
        },
      },
    ],
  });
  shallow(<Templates />);
});
