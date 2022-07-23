import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-2 lg:gap-y-3 mb-4 lg:mb-5">
      {children}
    </div>
  );
};

export default withErrorBoundary(FormGroup, {
  FallbackComponent: ErrorComponent,
});
