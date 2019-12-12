import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter } from "react-router-dom";

import apolloClient from "./services/apolloClient";
import InitProvider from "./providers/InitProvider";

export default function Providers({ children }) {
  return (
    <>
      <InitProvider>
        <ApolloProvider client={apolloClient}>
          <HashRouter>{children}</HashRouter>
        </ApolloProvider>
      </InitProvider>
    </>
  );
}

Providers.propTypes = {
  children: PropTypes.any.isRequired,
};
