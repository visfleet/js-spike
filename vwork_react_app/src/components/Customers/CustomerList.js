import React from "react";
import gql from "graphql-tag";

import AppTable from "../../controls/AppTable";
import useData from "../../hooks/useData";

export default function CustomerList() {
  const data = useData(gql`
    query {
      customers {
        id
        name
        address
        jobs {
          id
        }
      }
    }
  `);

  return (
    <AppTable
      columns={[
        {
          title: "Name",
        },
        {
          title: "ID",
          span: 1,
        },
        {
          title: "Address",
          span: 4,
        },
        { title: "Jobs", span: 1 },
      ]}
      rows={data?.customers.map(customer => ({
        key: customer.id,
        values: [
          customer.name,
          customer.id,
          customer.address,
          customer.jobs.length,
        ],
      }))}
    />
  );
}
