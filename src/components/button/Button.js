import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/className";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import { Link } from "react-router-dom";

const Button = ({ type, className, children, isLoading = false, ...rest }) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  let defaultBtnColor = "";
  switch (rest.kind) {
    case "primary":
      defaultBtnColor = "bg-primary text-white";
      break;
    case "secondary":
      defaultBtnColor = "bg-secondary text-white";
      break;
    case "ghost":
      defaultBtnColor = "bg-secondary text-secondary bg-opacity-10";
      break;
    default:
      break;
  }

  if (rest.href) {
    return (
      <Link
        to={rest.href}
        className={classNames(
          "defaultBtnClassName",
          defaultBtnColor,
          className
        )}
        {...rest}
      >
        {child}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(
        "defaultBtnClassName",
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        defaultBtnColor,
        className
      )}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default withErrorBoundary(Button, {
  FallbackComponent: ErrorComponent,
});
