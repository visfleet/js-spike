import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import ViewPort from "./controls/ViewPort";
import apolloClient from "./services/apolloClient";
import JobList from "./components/JobList/JobList";

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ViewPort>
          <JobList />
        </ViewPort>
      </ApolloProvider>
    </>
  );
}

export default App;
