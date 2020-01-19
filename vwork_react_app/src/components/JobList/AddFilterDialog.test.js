import React from "react";
import { shallow } from "enzyme";

import useFilters from "./useFilters";
import AddFilterDialog from "./AddFilterDialog";

jest.mock("./useFilters");

beforeEach(() => {
  useFilters.mockReturnValue({
    filtersState: {},
    filters: [
      {
        id: "filter1",
        label: "Filter 1",
        type: "options",
        options: [
          {
            value: "option1",
            label: "Option 1",
          },
        ],
      },
      {
        id: "filter2",
        label: "Filter 2",
        type: "datepicker",
      },
    ],
  });
});

it("list all filters", () => {
  shallow(<AddFilterDialog open onClose={() => {}} />);
});

it("renders options filter", () => {
  const wrapper = shallow(<AddFilterDialog open onClose={() => {}} />);
  wrapper
    .find(`button`)
    .at(0)
    .simulate("click");
});

it("renders datepicker filter", () => {
  const wrapper = shallow(<AddFilterDialog open onClose={() => {}} />);
  wrapper
    .find(`button`)
    .at(1)
    .simulate("click");
});
