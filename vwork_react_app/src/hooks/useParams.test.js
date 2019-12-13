import useParams from "./useParams";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "/pathname",
    search: "?param1=a",
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("returns", () => {
  const { param1, pathnameForParams, setParams } = useParams();
  expect(param1).toEqual("a");
  expect(pathnameForParams({ param2: "b" })).toEqual(
    "/pathname?param1=a&param2=b",
  );
  setParams({ param2: "b" });
});
