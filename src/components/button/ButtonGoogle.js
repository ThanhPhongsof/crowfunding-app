import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

const ButtonGoogle = ({ text = "", onClick = () => {} }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border gap-x-3 border-strock dark:border-darkStroke rounded-xl text-text2 dark:text-white"
      onClick={onClick}
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
