import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { initApolloClient } from "../services/apolloClient";

export default function InitProvider({ children }) {
  const [inited, initedSet] = useState(false);
  useEffect(
    () => {
      Promise.resolve().then(async () => {
        await initApolloClient();
        initedSet(true);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <>{inited ? children : <>TODO: loading</>}</>;
}

InitProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
