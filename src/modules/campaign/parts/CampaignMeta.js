import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import classNames from "utils/className";

const CampaignMeta = ({ amout, text, size }) => {
  return (
    <div className="flex flex-col gap-x-1">
      <span
        className={classNames(
          "text-text2 dark:text-text4 font-semibold",
          size === "small" ? "text-sm" : "text-xl 2xl:text-2xl"
        )}
      >
        {amout}
      </span>
      <span
        className={classNames(
          "text-text4",
          size === "small" ? "text-xs" : "text-base 2xl:text-lg"
        )}
      >
        {text}
      </span>
    </div>
  );
};

CampaignMeta.propTypes = {
  amout: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default withErrorBoundary(CampaignMeta, {
  FallbackComponent: ErrorComponent,
});
