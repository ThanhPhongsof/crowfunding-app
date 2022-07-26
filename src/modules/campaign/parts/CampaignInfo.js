import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/className";

const CampaignInfo = ({ title, desc, size }) => {
  return (
    <>
      <h3
        className={classNames(
          "text-text1 dark:text-white",
          size === "small"
            ? "text-base font-semibold mb-1"
            : "text-xl font-bold mb-4 2xl:text-2xl 2xl:mb-6"
        )}
      >
        {title}
      </h3>
      <p
        className={classNames(
          "text-text3 break-all font-normal",
          size === "small"
            ? "text-xs mb-4"
            : "text-sm mb-3 2xl:text-base 2xl:mb-5"
        )}
      >
        {desc}
      </p>
    </>
  );
};

CampaignInfo.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default CampaignInfo;
