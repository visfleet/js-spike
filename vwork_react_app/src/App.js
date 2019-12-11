import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter } from "react-router-dom";

import ViewPort from "./controls/ViewPort";
import apolloClient from "./services/apolloClient";
import Routes from "./components/Routes/Routes";

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <HashRouter>
          <ViewPort>
            <Routes />
          </ViewPort>
        </HashRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
