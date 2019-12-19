import React, { useState } from "react";
import gql from "graphql-tag";

import useData from "../../hooks/useData";
import Paginator from "../../controls/Paginator";

export default function JobList() {
  const [page, pageSet] = useState(0);
  const data = useData(
    gql`
      query($page: Int!) {
        jobsPaged(page: $page, perPage: 25) {
          id
          totalPages
          nodes {
            id
            templateName
            createdAt
          }
        }
      }
    `,
    { page },
  );

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Template Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {(data?.jobsPaged.nodes || []).map(job => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.templateName}</td>
              <td>{job.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        page={page}
        totalPages={data?.jobsPaged.totalPages}
        onPageChange={pageSet}
      />
    </>
  );
}
