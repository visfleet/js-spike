import React from "react";
import gql from "graphql-tag";

import AppTable from "../../controls/AppTable";
import useData from "../../hooks/useData";

export default function AssetList() {
  const data = useData(gql`
    query {
      assets {
        id
        name
        assetModel
        customer {
          id
          name
        }
        jobs {
          id
        }
        createdAt
      }
    }
  `);

  return (
    <>
      <AppTable
        columns={[
          {
            title: "ID",
            span: 1,
          },
          {
            title: "Name",
          },
          {
            title: "Model",
          },
          {
            title: "Customer",
          },
          {
            title: "Jobs",
            span: 1,
          },
          {
            title: "Created At",
          },
        ]}
        rows={data?.assets.map(asset => ({
          key: asset.id,
          values: [
            asset.id,
            asset.name,
            asset.assetModel,
            asset.customer?.name,
            asset.jobs.length,
            asset.createdAt,
          ],
        }))}
      />
    </>
  );
}
