import React, { useState } from "react";
import gql from "graphql-tag";

import AppTable from "controls/AppTable";
import Paginator from "controls/Paginator";
import useData from "hooks/useData";

export default function CustomerList() {
  const [page, pageSet] = useState(0);
  const data = useData(
    gql`
      query($page: Int!) {
        customersPaged(page: $page) {
          id
          totalPages
          nodes {
            id
            name
            address
            jobs {
              id
            }
          }
        }
      }
    `,
    { page },
  );

  return (
    <>
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
        rows={data?.customersPaged.nodes.map(customer => ({
          key: customer.id,
          values: [
            customer.name,
            customer.id,
            customer.address,
            customer.jobs.length,
          ],
        }))}
      />
      <Paginator
        page={page}
        totalPages={data?.customersPaged.totalPages}
        onPageChange={pageSet}
      />
    </>
  );
}
