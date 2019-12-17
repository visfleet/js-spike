import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter } from "react-router-dom";
import EventListener from "react-event-listener";

import apolloClient from "./services/apolloClient";
import InitProvider from "./providers/InitProvider";

export default function Providers({ children }) {
  return (
    <>
      <EventListener
        target="document"
        onClick={event => {
          if (
            event.target.tagName === "A" &&
            event.target.getAttribute("href") === "#"
          )
            event.preventDefault();
        }}
      />
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
