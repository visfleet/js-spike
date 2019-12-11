import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import JobList from "../JobList/JobList";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/jobs" component={JobList} />
        <Redirect to="/jobs" />
      </Switch>
    </>
  );
}
