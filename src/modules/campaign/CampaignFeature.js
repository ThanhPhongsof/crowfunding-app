import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignImage from "./parts/CampaignImage";
import CampaignInfo from "./parts/CampaignInfo";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className="flex flex-col md:flex-row items-center flex-start gap-x-7 w-full max-w-[328px] md:max-w-[595px] lg:max-w-[850px] 2xl:max-w-[1243px]">
      <CampaignImage className="h-[210px] md:h-[266px] 2xl:h-[366px] md:w-full flex-1 flex-shrink-0"></CampaignImage>
      <div className="my-4 mr-auto md:mr-0 2xl:my-0 flex-1 max-w-[435px]">
        <CampaignCategory text="Education"></CampaignCategory>
        <CampaignInfo
          title="Powered Kits Learning Boxes"
          desc="Fun, durable and reusable boxes with eco-friendly options."
          size="big"
        ></CampaignInfo>
        <div className="w-full h-[5px] bg-[#EFEFEF] dark:bg-darkStroke rounded-full mb-6 2xl:mb-8">
          <div className="w-2/4 h-full bg-primary rounded-full"></div>
        </div>
        <div className="flex justify-between items-start gap-x-5">
          <CampaignMeta
            amout="$2,000"
            text="Raised of $1,900"
            size="big"
          ></CampaignMeta>
          <CampaignMeta
            amout="173"
            text="Total backers"
            size="big"
          ></CampaignMeta>
          <CampaignMeta amout="30" text="Days left" size="big"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(CampaignFeature, {
  FallbackComponent: ErrorComponent,
});
