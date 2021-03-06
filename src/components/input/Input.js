import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/className";

const Input = ({
  control,
  name,
  type = "text",
  error = "",
  placeholder = "",
  children,
  ...rest
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        type={type}
        className={classNames(
          "w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 bg-transparent",
          error.length > 0
            ? "border-error text-error"
            : "text-text1 dark:text-white border-strock dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
        placeholder={`${error.length > 0 ? "" : placeholder}`}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="text-sm font-medium text-error absolute top-2/4 -translate-y-2/4 left-6 pointer-events-none error-input">
          {error}
        </span>
      )}
      <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer">
        {children}
      </span>
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  erorr: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
