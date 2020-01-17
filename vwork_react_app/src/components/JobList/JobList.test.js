import React from "react";
import { shallow } from "enzyme";

import useData from "hooks/useData";
import useRouteState from "hooks/useRouteState";

import JobList from "./JobList";

jest.mock("hooks/useData");
jest.mock("hooks/useRouteState");

beforeEach(() => {
  useRouteState.mockImplementation((paramName, defaultValue) => [
    defaultValue,
    () => {},
  ]);
});

it("renders without data", () => {
  useData.mockReturnValue();
  shallow(<JobList />);
});

it("renders with data", () => {
  useData.mockReturnValue({
    jobsPaged: {
      totalPages: 2,
      nodes: [
        {
          id: "1",
        },
      ],
    },
    setting: {
      jobListColumns: ["Job ID"],
    },
  });

  shallow(<JobList />);
});
