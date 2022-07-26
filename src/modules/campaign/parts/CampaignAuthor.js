import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";
import { defaultImageAuthor } from "constants/global";

const CampaignAuthor = ({ image = defaultImageAuthor, author }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        srcSet={image}
        alt={author}
        className="w-8 h-8 rounded-full object-cover"
      />
      <p className="text-text3 text-xs">
        by{" "}
        <span className="font-semibold text-text2 dark:text-text4">
          {author}
        </span>
      </p>
    </div>
  );
};

CampaignAuthor.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string.isRequired,
};

export default withErrorBoundary(CampaignAuthor, {
  FallbackComponent: ErrorComponent,
});
