import React from "react";
import gql from "graphql-tag";

import useData from "../../hooks/useData";
import AppTable from "../../controls/AppTable";

export default function Templates() {
  const data = useData(gql`
    query {
      templates {
        id
        name
        customer {
          id
          name
        }
        createdAt
      }
    }
  `);

  return (
    <>
      <p>
        Templates are an easy way to create your jobs if they always look the
        same. You can define the steps that workers need to complete as well as
        any extra custom fields that they need to fill in.
      </p>
      <AppTable
        columns={[
          {
            title: "Name",
          },
          {
            title: "Customer",
          },
        ]}
        rows={data?.templates.map(template => ({
          key: template.id,
          values: [template.name, template.customer?.name],
        }))}
      />
    </>
  );
}
