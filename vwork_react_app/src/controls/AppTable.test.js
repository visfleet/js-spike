import React from "react";
import { shallow } from "enzyme";

import AppTable from "./AppTable";

it("renders", () => {
  shallow(
    <AppTable
      rows={[{ key: 1, values: ["a", "b"] }]}
      columns={[
        {
          title: "Column 1",
        },
        {
          title: "Column 2",
        },
      ]}
    />,
  );
});

it("renders without rows", () => {
  shallow(
    <AppTable
      columns={[
        {
          title: "Column 1",
        },
        {
          title: "Column 2",
        },
      ]}
    />,
  );
});
