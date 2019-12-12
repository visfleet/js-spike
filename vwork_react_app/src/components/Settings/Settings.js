import React from "react";

import TabsPage from "../../controls/TabsPage";

import General from "./General";
import Templates from "./Templates";

export default function Settings() {
  return (
    <>
      <TabsPage
        tabs={[
          {
            name: "general",
            title: "General",
            children: <General />,
          },
          {
            name: "templates",
            title: "Templates",
            children: <Templates />,
          },
        ]}
      />
    </>
  );
}
