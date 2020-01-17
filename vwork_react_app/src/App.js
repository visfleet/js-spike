import React from "react";
import { Switch, Route } from "react-router-dom";
import gql from "graphql-tag";

import useData from "hooks/useData";

import ViewPort from "./controls/ViewPort";
import JobList from "./components/JobList/JobList";
import Schedule from "./components/Schedule/Schedule";
import Map from "./components/Map/Map";
import CustomerList from "./components/Customers/CustomerList";
import Settings from "./components/Settings/Settings";
import AssetList from "./components/Assets/AssetList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import DevSettings from "./DevSettings";

function App() {
  const data = useData(gql`
    query {
      setting {
        id
        enableJobs
        enableSchedule
        enableAssets
        enableCustomers
      }
    }
  `);

  return (
    <>
      <ViewPort
        navItems={[
          data?.setting.enableSchedule && {
            title: "Schedule",
            href: "/#schedule",
          },
          data?.setting.enableJobs && { title: "Jobs", href: "/#jobs" },
          data?.setting.enableSchedule && { title: "Map", href: "/#map" },
          data?.setting.enableCustomers && {
            title: "Customers",
            href: "/#customers",
          },
          data?.setting.enableAssets && { title: "Assets", href: "/#assets" },
          { title: "Settings", href: "/#admin" },
        ].filter(i => i)}
      >
        <Switch>
          <Route exact path="/jobs" component={JobList} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/admin" component={Settings} />
          <Route exact path="/customers" component={CustomerList} />
          <Route exact path="/assets" component={AssetList} />
          <Route component={PageNotFound} />
        </Switch>
      </ViewPort>
      <DevSettings />
    </>
  );
}

export default App;
