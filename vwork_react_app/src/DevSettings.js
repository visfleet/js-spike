import React from "react";
import gql from "graphql-tag";

import useData from "./hooks/useData";
import useAction from "./hooks/useAction";

export default function DevSettings() {
  const data = useData(gql`
    query {
      apiRequestDelay @client
    }
  `);

  const apiRequestDelaySet = useAction(gql`
    mutation($apiRequestDelay: Integer!) {
      apiRequestDelaySet(apiRequestDelay: $apiRequestDelay) @client
    }
  `);

  return (
    <div
      className="well"
      style={{
        position: "fixed",
        left: 10,
        bottom: 10,
        margin: 0,
      }}
    >
      {data && (
        <select
          value={String(data.apiRequestDelay)}
          onChange={event =>
            apiRequestDelaySet(
              {
                apiRequestDelay: Number.parseInt(event.currentTarget.value),
              },
              {
                refetchQueries: [
                  {
                    query: gql`
                      query {
                        apiRequestDelay @client
                      }
                    `,
                  },
                ],
              },
            )
          }
        >
          <option value="0">No delay</option>
          <option value="100">100ms</option>
          <option value="300">300ms</option>
          <option value="1000">1000ms</option>
        </select>
      )}
    </div>
  );
}
