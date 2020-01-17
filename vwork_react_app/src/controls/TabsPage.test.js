import React from "react";
import { shallow } from "enzyme";

import useParams from "hooks/useParams";

import TabsPage from "./TabsPage";

jest.mock("hooks/useParams");

it("renders", () => {
  useParams.mockReturnValue({
    tab: "jobs",
    pathnameForParams: () => "/pathnameForParams",
  });

  shallow(
    <TabsPage
      tabs={[
        {
          name: "jobs",
          title: "Jobs",
          children: <>Jobs</>,
        },
        {
          name: "settings",
          title: "Settings",
          children: <>Settings</>,
        },
      ]}
    />,
  );
});
