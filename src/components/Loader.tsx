import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={414}
      height={414}
      viewBox="0 0 414 414"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="414" height="414" />
    </ContentLoader>
  );
};

export default Loader;
