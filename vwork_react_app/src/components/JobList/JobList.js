import React, { useState } from "react";
import gql from "graphql-tag";

import useData from "~/hooks/useData";
import useRouteState from "~/hooks/useRouteState";
import Paginator from "~/controls/Paginator";

import useColumns from "./useColumns";
import ValueCell from "./ValueCell";
import CustomizeDialog from "./CustomizeDialog";
import Filters from "./Filters";
import useFilters from "./useFilters";

export default function JobList() {
  const { columns } = useColumns();
  const [page, pageSet] = useRouteState("page", 0);
  const [customizeDialogOpen, customizeDialogOpenSet] = useState(false);
  const { filtersState } = useFilters();
  const data = useData(
    gql`
      query($page: Int!, $jobsFilter: JobsFilter!) {
        jobsPaged(page: $page, perPage: 25, filter: $jobsFilter) {
          id
          totalPages
          nodes {
            id
          }
        }
      }
    `,
    {
      page,
      jobsFilter: filtersState,
    },
  );

  return (
    <>
      <CustomizeDialog
        open={customizeDialogOpen}
        onClose={() => customizeDialogOpenSet(false)}
      />
      <Filters />
      <div className="btn-toolbar">
        <button className="btn" onClick={() => customizeDialogOpenSet(true)}>
          Customise
        </button>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.jobsPaged.nodes.map(job => (
            <tr key={job.id}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>
                  <ValueCell jobId={job.id} column={column} />
                </td>
              ))}
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
