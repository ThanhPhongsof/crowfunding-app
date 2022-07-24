import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Gap = () => {
  return <div className="mb-8"></div>;
};

export default withErrorBoundary(Gap, { FallbackComponent: ErrorComponent });
