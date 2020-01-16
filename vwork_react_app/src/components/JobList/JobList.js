import React, { useState } from "react";
import gql from "graphql-tag";

import useData from "~/hooks/useData";
import Paginator from "~/controls/Paginator";

import allColumns, { defaultColumns } from "./allColumns";
import ValueCell from "./ValueCell";
import CustomizeDialog from "./CustomizeDialog";

export default function JobList() {
  const [page, pageSet] = useState(0);
  const [customizeDialogOpen, customizeDialogOpenSet] = useState(false);
  const data = useData(
    gql`
      query($page: Int!) {
        jobsPaged(page: $page, perPage: 25) {
          id
          totalPages
          nodes {
            id
          }
        }
        setting {
          id
          jobListColumns
        }
      }
    `,
    { page },
  );

  const columns =
    data?.setting.jobListColumns.map(columnLabel =>
      allColumns.find(c => c.label === columnLabel),
    ) || defaultColumns;

  return (
    <>
      <CustomizeDialog
        open={customizeDialogOpen}
        onClose={() => customizeDialogOpenSet(false)}
      />
      <div className="btn-toolbar">
        <button className="btn" onClick={() => customizeDialogOpenSet(true)}>
          Config
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
