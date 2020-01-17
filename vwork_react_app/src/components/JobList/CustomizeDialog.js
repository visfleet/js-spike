import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";

import Dialog from "~/controls/Dialog";
import useData from "~/hooks/useData";
import useAction from "~/hooks/useAction";

import useColumns from "./useColumns";

export default function CustomizeDialog({ open, onClose }) {
  const { columns, allColumns } = useColumns();
  const data = useData(
    gql`
      query {
        setting {
          id
          jobListColumns
        }
      }
    `,
  );

  const updateSetting = useAction(
    gql`
      mutation($input: UpdateSettingInput!) {
        updateSetting(input: $input) {
          setting {
            id
            jobListColumns
          }
        }
      }
    `,
    variables => ({
      optimisticResponse: {
        updateSetting: {
          __typename: "UpdateSettingPayload",
          setting: {
            ...data.setting,
            jobListColumns: variables.input.jobListColumns,
          },
        },
      },
    }),
  );

  const newColumnLabel = (
    allColumns.find(c => !data?.setting.jobListColumns.includes(c.label)) ||
    allColumns[0]
  ).label;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Customise what you see in your Jobs Table"
    >
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          style={{ display: "flex", alignItems: "center" }}
        >
          <label style={{ marginBottom: 0, marginRight: 10 }}>
            Column {columnIndex + 1}:
          </label>
          <select
            style={{ marginBottom: 0, marginRight: 10 }}
            value={column.label}
            onChange={event =>
              // replace the column
              updateSetting({
                input: {
                  jobListColumns: [
                    ...columns.slice(0, columnIndex).map(c => c.label),
                    event.currentTarget.value,
                    ...columns.slice(columnIndex + 1).map(c => c.label),
                  ],
                },
              })
            }
          >
            {allColumns.map(columnOption => (
              <option key={columnOption.label} value={columnOption.label}>
                {columnOption.label}
              </option>
            ))}
          </select>
          <div className="btn-toolbar">
            <button
              className="btn btn-danger btn-small"
              onClick={() =>
                // remove the column
                updateSetting({
                  input: {
                    jobListColumns: [
                      ...columns.slice(0, columnIndex).map(c => c.label),
                      ...columns.slice(columnIndex + 1).map(c => c.label),
                    ],
                  },
                })
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="btn-toolbar">
        <button
          className="btn btn-info"
          onClick={() =>
            updateSetting({
              input: {
                jobListColumns: [...columns.map(c => c.label), newColumnLabel],
              },
            })
          }
        >
          Add
        </button>
      </div>
    </Dialog>
  );
}

CustomizeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
