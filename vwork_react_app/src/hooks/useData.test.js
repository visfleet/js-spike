import { useQuery } from "@apollo/react-hooks";

import useData from "./useData";

jest.mock("@apollo/react-hooks");

describe("when loaded", () => {
  beforeEach(() => {
    useQuery.mockReturnValue({ data: "foo" });
  });

  it("returns data", () => {
    expect(useData()).toEqual("foo");
  });
});

describe("when not loaded", () => {
  beforeEach(() => {
    useQuery.mockReturnValue({ data: null });
  });

  it("returns data", () => {
    expect(useData()).toEqual(null);
  });
});
