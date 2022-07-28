import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const Overlay = () => {
  return (
    <div className="overlay fixed inset-0 z-40 bg-black bg-opacity-10 opacity-0 invisible"></div>
  );
};

export default withErrorBoundary(Overlay, {
  FallbackComponent: ErrorComponent,
});
