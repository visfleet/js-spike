import React from "react";
import ContentLoader from "react-content-loader";
import _ from "lodash";
import PropTypes from "prop-types";
import classnames from "classnames";

export default function AppTable({ rows, columns }) {
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column.title}
                className={classnames(`span${column.span || 2}`)}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!rows &&
            _.times(10).map(rowIndex => (
              <tr key={rowIndex}>
                {columns.map(column => (
                  <td
                    key={column.title}
                    className={classnames(`span${column.span || 2}`)}
                  >
                    <ContentLoader
                      style={{
                        height: "1em",
                        width: "100%",
                        opacity: Number(2 / rowIndex).toFixed(1),
                      }}
                      height={50}
                      width={400}
                      speed={2}
                      primaryColor="#d9d9d9"
                      secondaryColor="#ecebeb"
                    >
                      <rect
                        x="10"
                        y="10"
                        rx="3"
                        ry="3"
                        width="350"
                        height="30"
                      />
                    </ContentLoader>
                  </td>
                ))}
              </tr>
            ))}
          {rows &&
            rows.map(row => (
              <tr key={row.key}>
                {columns.map((column, columnIndex) => (
                  <td
                    key={column.title}
                    className={classnames(`span${column.span || 2}`)}
                  >
                    {row.values[columnIndex]}
                  </td>
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
