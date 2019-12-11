import React from "react";
import gql from "graphql-tag";

import useData from "../../hooks/useData";

export default function JobList() {
  const data = useData(gql`
    query {
      jobs {
        id
        templateName
        createdAt
      }
    }
  `);

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Template Name</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {(data?.jobs || []).map(job => (
          <tr key={job.id}>
            <td>{job.id}</td>
            <td>{job.templateName}</td>
            <td>{job.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
