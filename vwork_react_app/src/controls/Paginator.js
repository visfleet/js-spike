import React from "react";
import _ from "lodash";
import classnames from "classnames";
import PropTypes from "prop-types";

export default function Paginator({ page, onPageChange, totalPages }) {
  const prevDisabled = !page;
  const nextDisabled = !totalPages || page >= totalPages - 1;

  const renderPage = i => (
    <li
      key={i}
      className={classnames({
        active: i === page,
      })}
    >
      <a
        href="#"
        onClick={event => {
          onPageChange(i);
        }}
      >
        {i + 1}
      </a>
    </li>
  );
  const renderPagesRange = (start, end) => (
    <>
      {end - start > 4 ? (
        <>
          {_.times(2).map(i => renderPage(start + i))}
          <li className="disabled">
            <a href="#">...</a>
          </li>
          {_.times(2).map(i => renderPage(end - 2 + i))}
        </>
      ) : (
        _.times(end - start).map(i => renderPage(start + i))
      )}
    </>
  );

  return (
    <div className="pagination">
      <ul>
        <li
          className={classnames({
            disabled: prevDisabled,
          })}
        >
          <a
            href="#"
            onClick={event => {
              if (prevDisabled) return;
              onPageChange(page - 1);
            }}
          >
            Prev
          </a>
        </li>
        {renderPagesRange(0, page)}
        {renderPage(page)}
        {renderPagesRange(page + 1, totalPages)}
        <li
          className={classnames({
            disabled: nextDisabled,
          })}
        >
          <a
            href="#"
            onClick={event => {
              if (nextDisabled) return;
              onPageChange(page + 1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
};
