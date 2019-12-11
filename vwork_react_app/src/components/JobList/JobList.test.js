import React from "react";
import { shallow } from "enzyme";

import useData from "../../hooks/useData";

import JobList from "./JobList";

jest.mock("../../hooks/useData");

it("renders without data", () => {
  useData.mockReturnValue();
  shallow(<JobList />);
});

it("renders with data", () => {
  useData.mockReturnValue({
    jobs: [
      {
        id: 1,
        templateName: "foo"
      }
    ]
  });
  shallow(<JobList />);
});
