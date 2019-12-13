import useParams from "./useParams";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    search: "?foo=a&faa=b",
  }),
  useHistory: () => ({
    push: () => {},
  }),
}));

it("returns params", () => {
  expect(useParams().foo).toEqual("a");
});
