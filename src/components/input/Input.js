import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = ({ control, name, type = "text", className = "", ...rest }) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="relative">
      <input
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4 ${className}`}
        {...rest}
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
