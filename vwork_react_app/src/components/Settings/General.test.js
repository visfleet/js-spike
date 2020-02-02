import React from "react";
import { shallow } from "enzyme";
import { useForm } from "react-hook-form";

import useData from "hooks/useData";
import useAction from "hooks/useAction";
import { createFormMock } from "testHelpers";

import General from "./General";

jest.mock("hooks/useData");
jest.mock("hooks/useAction");
jest.mock("react-hook-form");
const actionMock = jest.fn();
const formMock = createFormMock();

beforeEach(() => {
  useData.mockReturnValue({
    setting: {
      enableJobs: true,
      enableAssets: true,
      enableSchedule: true,
      enableCustomers: true,
    },
  });
  useAction.mockReturnValue(actionMock);
  useForm.mockReturnValue(formMock);
});

it("renders", () => {
  shallow(<General />);
});

it("change setting", async () => {
  shallow(<General />);
  const data = {};
  formMock.onSubmit(data);
  expect(actionMock).toHaveBeenCalledWith({ input: data });
});
