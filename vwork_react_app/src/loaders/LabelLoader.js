import React from "react";
import PropTypes from "prop-types";
import ContentLoader from "react-content-loader";

export default function LabelLoader({ width = 80 }) {
  return (
    <ContentLoader
      style={{ width }}
      height={50}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="10" y="10" rx="3" ry="3" width="350" height="30" />
    </ContentLoader>
  );
}

LabelLoader.propTypes = {
  width: PropTypes.number,
};
