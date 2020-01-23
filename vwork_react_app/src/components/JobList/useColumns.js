import React from "react";
import gql from "graphql-tag";

import useData from "hooks/useData";

// render() is not a component
/* eslint-disable react/prop-types */
export default function useColumns() {
  const data = useData(
    gql`
      query {
        setting {
          id
          jobListColumns
          enableAssets
          enableCustomers
        }
      }
    `,
  );

  const allColumns = [
    {
      label: "Job ID",
      fragment: gql`
        fragment JOB_ID_FRAGMENT on Job {
          id
        }
      `,
      fragmentName: "JOB_ID_FRAGMENT",
      render: (data, job) => job.id,
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
      render: ({ job }) => job.state,
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
      render: ({ job }) => job.templateName,
    },
    data?.setting.enableCustomers && {
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
      render: ({ job }) => (
        <>
          {job.customer && (
            <a
              key={job.customer.id}
              href={`#customers/${job.customer.id}`}
              style={{ margin: "0 .5em" }}
            >
              {job.customer.name}
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
      render: ({ job }) => job.worker?.name,
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
      render: ({ job }) => job.plannedStartTime,
    },
    data?.setting.enableAssets && {
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
      render: ({ job }) => (
        <>
          {job.assets.map(asset => (
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
  ].filter(c => !!c);

  const columns =
    data?.setting.jobListColumns
      .map(columnLabel => allColumns.find(c => c.label === columnLabel))
      .filter(c => c) || allColumns.slice(0, 4);

  return { columns, allColumns };
}
