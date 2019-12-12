import { useQuery } from "@apollo/react-hooks";

import useData from "./useData";

jest.mock("@apollo/react-hooks");

it("returns data when loaded", () => {
  useQuery.mockReturnValue({ data: "foo" });
  expect(useData()).toEqual("foo");
});

it("returns data when not loaded", () => {
  useQuery.mockReturnValue({ data: null });
  expect(useData()).toEqual(null);
});
