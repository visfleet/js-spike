import useData from "hooks/useData";

import useColumns from "./useColumns";

jest.mock("hooks/useData");

it("returns stored columns", () => {
  useData.mockReturnValue({
    setting: {
      jobListColumns: ["Job ID", "Status", "Lorem"],
    },
  });

  const { columns } = useColumns();

  expect(columns.map(c => c.label)).toEqual(["Job ID", "Status"]);
});

it("returns allColumns", () => {
  useData.mockReturnValue({
    setting: {
      jobListColumns: [],
      enableAssets: true,
      enableCustomers: true,
    },
  });

  const { allColumns } = useColumns();

  expect(allColumns.map(c => c.label)).toEqual([
    "Job ID",
    "Status",
    "Template",
    "Customer",
    "Worker",
    "Planned",
    "Assets",
  ]);
});
