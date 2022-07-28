import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";
import PropTypes from "prop-types";

const PageContainer = ({ children }) => {
  return (
    <div className="mx-auto 3xl:mx-0 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      {children}
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(PageContainer, {
  FallbackComponent: ErrorComponent,
});
