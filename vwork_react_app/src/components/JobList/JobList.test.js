import React from "react";
import { shallow } from "enzyme";

import JobList from "./JobList";
import useData from "../../hooks/useData";

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
