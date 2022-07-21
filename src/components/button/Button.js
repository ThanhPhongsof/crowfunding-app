import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/className";

const Button = ({
  type = "button",
  className,
  children,
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  return (
    <button
      type={type}
      className={classNames(
        "p-4 text-base text-white font-semibold flex items-center justify-center rounded-lg min-h-[56px]",
        !!isLoading ? "opacity-50 pointer-events-none" : "",
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
};

export default Button;
