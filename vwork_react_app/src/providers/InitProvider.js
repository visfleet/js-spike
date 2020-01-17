import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { initApolloClient } from "services/apolloClient";
import { initClientSchema } from "services/clientSchema";
import ApplicationLoader from "loaders/ApplicationLoader";

export default function InitProvider({ children }) {
  const [inited, initedSet] = useState(false);
  useEffect(
    () => {
      Promise.resolve().then(async () => {
        await initApolloClient();
        await initClientSchema();
        initedSet(true);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <>{inited ? children : <ApplicationLoader />}</>;
}

InitProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
