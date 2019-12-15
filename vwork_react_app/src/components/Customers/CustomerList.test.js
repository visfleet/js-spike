import React from "react";
import { shallow } from "enzyme";

import useData from "../../hooks/useData";

import CustomerList from "./CustomerList";

jest.mock("../../hooks/useData");

it("renders without data", () => {
  useData.mockReturnValue(null);
  shallow(<CustomerList />);
});

it("renders with data", () => {
  useData.mockReturnValue({
    customers: [
      {
        id: 1,
        name: "John",
        address: "18 Railway St",
        jobs: [{ id: 1 }],
      },
    ],
  });
  shallow(<CustomerList />);
});
