import React from "react";
import ContentLoader from "react-content-loader";

const DetailsLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1296}
      height={1296}
      viewBox="0 0 1296 1296"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="1296" height="1296" />
    </ContentLoader>
  );
};

export default DetailsLoader;
