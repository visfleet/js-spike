import React from "react";
import PropTypes from "prop-types";

export default function AppTable({ rows = [], columns }) {
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.title}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.key}>
              {columns.map((column, columnIndex) => (
                <td key={column.title}>{row.values[columnIndex]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

AppTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any.isRequired,
      values: PropTypes.array.isRequired,
    }),
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
