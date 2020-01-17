import React, { useState } from "react";
import gql from "graphql-tag";

import AppTable from "controls/AppTable";
import useData from "hooks/useData";
import Paginator from "controls/Paginator";

export default function AssetList() {
  const [page, pageSet] = useState(0);
  const [keyword, keywordSet] = useState("");
  const data = useData(
    gql`
      query($page: Int!, $keyword: String!) {
        assetsPaged(page: $page, perPage: 20, keyword: $keyword) {
          id
          totalPages
          nodes {
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
      }
    `,
    { page, keyword },
  );

  return (
    <>
      <input
        type="text"
        placeholder="keyword"
        value={keyword}
        onChange={event => keywordSet(event.currentTarget.value)}
      />
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
        rows={data?.assetsPaged.nodes.map(asset => ({
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
      <Paginator
        page={page}
        totalPages={data?.assetsPaged.totalPages}
        onPageChange={pageSet}
      />
    </>
  );
}
