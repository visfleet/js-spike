import React from "react";
import { Switch, Route } from "react-router-dom";

import ViewPort from "./controls/ViewPort";
import JobList from "./components/JobList/JobList";
import Schedule from "./components/Schedule/Schedule";
import Map from "./components/Map/Map";
import CustomerList from "./components/Customers/CustomerList";
import Settings from "./components/Settings/Settings";
import AssetList from "./components/Assets/AssetList";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <ViewPort
        navItems={[
          { title: "Schedule", href: "/#/schedule" },
          { title: "Jobs", href: "/#/jobs" },
          { title: "Map", href: "/#/map" },
          { title: "Customers", href: "/#/customers" },
          { title: "Assets", href: "/#/assets" },
          { title: "Settings", href: "/#/admin" },
        ]}
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
    </>
  );
}

export default App;
