import React from "react";
import PropTypes from "prop-types";

import LabelLoader from "loaders/LabelLoader";
import useData from "hooks/useData";

export default function ValueCell({ column, jobId, jobData }) {
  const data = useData(column.query, {
    jobId,
  });

  return (
    <>
      {!data && <LabelLoader />}
      {!!data && column.render(data, jobData)}
    </>
  );
}

ValueCell.propTypes = {
  jobId: PropTypes.string.isRequired,
  column: PropTypes.shape({
    render: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
  }),
  jobData: PropTypes.object.isRequired,
};
