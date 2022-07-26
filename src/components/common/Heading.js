import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import classNames from "utils/className";
import ErrorComponent from "./ErrorComponent";
import PropTypes from "prop-types";

const Heading = ({ children, className = "", number = null }) => {
  return (
    <h2
      className={classNames(
        "text-lg text-text1 dark:text-white font-semibold mb-5",
        className
      )}
    >
      {children}
      {number && (
        <span className="text-secondary dark:text-white">{` (${number})`}</span>
      )}
    </h2>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  number: PropTypes.number,
};

export default withErrorBoundary(Heading, {
  FallbackComponent: ErrorComponent,
});
