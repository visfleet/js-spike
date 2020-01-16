import React from "react";
import gql from "graphql-tag";

const allColumns = [
  {
    label: "Job ID",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
        }
      }
    `,
    render: data => data.job.id,
  },
  {
    label: "Status",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
          state
        }
      }
    `,
    render: data => data.job.state,
  },
  {
    label: "Template",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
          templateName
        }
      }
    `,
    render: data => data.job.templateName,
  },
  {
    label: "Customer",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
          customer {
            id
            name
          }
        }
      }
    `,
    render: data => (
      <>
        {data.job.customer && (
          <a
            key={data.job.customer.id}
            href={`#customers/${data.job.customer.id}`}
            style={{ margin: "0 .5em" }}
          >
            {data.job.customer.name}
          </a>
        )}
      </>
    ),
  },
  {
    label: "Worker",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
          worker {
            id
            name
          }
        }
      }
    `,
    render: data => data.job.worker?.name,
  },
  {
    label: "Planned",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
          plannedStartTime
        }
      }
    `,
    render: data => data.job.plannedStartTime,
  },
  {
    label: "Assets",
    query: gql`
      query($jobId: ID!) {
        job(id: $jobId) {
          id
          assets {
            id
            name
          }
        }
      }
    `,
    render: data => (
      <>
        {data.job.assets.map(asset => (
          <a
            key={asset.id}
            href={`#assets/${asset.id}`}
            style={{ margin: "0 .5em" }}
          >
            {asset.name}
          </a>
        ))}
      </>
    ),
  },
];

export const defaultColumns = allColumns.slice(0, 3);

export default allColumns;
