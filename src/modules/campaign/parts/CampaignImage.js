import ErrorComponent from "components/common/ErrorComponent";
import { defaultImageBG } from "constants/global";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import classNames from "utils/className";

const CampaignImage = ({
  image = defaultImageBG,
  alt = "Powered Kits Learning Boxes",
  className = "h-[158px]",
}) => {
  return (
    <div className={classNames(className)}>
      <img
        srcSet={image}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default withErrorBoundary(CampaignImage, {
  FallbackComponent: ErrorComponent,
});
