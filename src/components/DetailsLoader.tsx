import React from "react";
import ContentLoader from "react-content-loader";

const DetailsLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1296}
      height={1388}
      viewBox="0 0 1296 1388"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="1296" height="40" />
      <rect x="0" y="50" rx="0" ry="0" width="1296" height="1296" />
    </ContentLoader>
  );
};

export default DetailsLoader;
