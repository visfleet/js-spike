import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter } from "react-router-dom";

import apolloClient from "./services/apolloClient";

export default function Providers({ children }) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <HashRouter>{children}</HashRouter>
      </ApolloProvider>
    </>
  );
}

Providers.propTypes = {
  children: PropTypes.any.isRequired,
};
