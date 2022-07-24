import ErrorComponent from "components/common/ErrorComponent";
import { IconFolder } from "components/icons";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CampaignCategory = ({ text }) => {
  return (
    <Link
      to="/"
      className="flex items-baseline gap-x-3 text-xs font-medium text-text3 mb-4"
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

CampaignCategory.propTypes = {
  text: PropTypes.string.isRequired,
};

export default withErrorBoundary(CampaignCategory, {
  FallbackComponent: ErrorComponent,
});
