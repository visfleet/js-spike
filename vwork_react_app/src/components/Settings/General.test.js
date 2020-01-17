import React from "react";
import { shallow } from "enzyme";

import useData from "hooks/useData";
import useAction from "hooks/useAction";

import General from "./General";

jest.mock("hooks/useData");
jest.mock("hooks/useAction");

beforeEach(() => {
  useData.mockReturnValue({
    setting: {
      enableJobs: true,
      enableAssets: true,
      enableSchedule: true,
      enableCustomers: true,
    },
  });
  useAction.mockReturnValue(() => {});
});

it("renders", () => {
  shallow(<General />);
});
