import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/className";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "inline-block text-sm font-medium cursor-pointer text-text2 dark:text-text3",
        className
      )}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export default withErrorBoundary(Label, {
  FallbackComponent: ErrorComponent,
});
