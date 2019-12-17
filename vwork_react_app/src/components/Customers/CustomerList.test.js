import { shallow } from "enzyme";
import { useState } from "react";

import useData from "../../hooks/useData";

import CustomerList from "./CustomerList";

const React = jest.requireActual("react");
jest.mock("react");
jest.mock("../../hooks/useData");
beforeEach(() => {
  useState.mockReturnValue([1]);
});

it("renders without data", () => {
  useData.mockReturnValue(null);
  shallow(<CustomerList />);
});

it("renders with data", () => {
  useData.mockReturnValue({
    customersPaged: {
      totalPages: 5,
      nodes: [
        {
          id: 1,
          name: "John",
          address: "18 Railway St",
          jobs: [{ id: 1 }],
        },
      ],
    },
  });
  shallow(<CustomerList />);
});
