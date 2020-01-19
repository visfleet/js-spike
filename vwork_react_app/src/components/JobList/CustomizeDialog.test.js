import React from "react";
import { shallow } from "enzyme";

import useData from "hooks/useData";
import useAction from "hooks/useAction";

import useColumns from "./useColumns";
import CustomizeDialog from "./CustomizeDialog";

jest.mock("hooks/useData");
jest.mock("hooks/useAction");
jest.mock("./useColumns");

const actionMock = jest.fn();

beforeEach(() => {
  useAction.mockReturnValue(actionMock);
  useColumns.mockReturnValue({
    columns: [
      {
        label: "Column 1",
      },
      {
        label: "Column 1",
      },
      {
        label: "Column 1",
      },
    ],
    allColumns: [
      {
        label: "Column 1",
      },
      {
        label: "Column 2",
      },
    ],
  });
});

it("renders with no data", () => {
  shallow(<CustomizeDialog open onClose={() => {}} />);
});

it("renders with data", () => {
  useData.mockReturnValue({
    setting: {
      jobListColumns: ["Column 1"],
    },
  });
  const wrapper = shallow(<CustomizeDialog open onClose={() => {}} />);
  wrapper.find("button.btn-info").simulate("click");
  expect(actionMock.mock.calls.length).toEqual(1);
});
