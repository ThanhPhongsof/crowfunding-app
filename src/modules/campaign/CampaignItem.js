import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignImage from "./parts/CampaignImage";
import CampaignInfo from "./parts/CampaignInfo";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignItem = () => {
  return (
    <div>
      <CampaignImage></CampaignImage>
      <div className="px-5 py-4">
        <CampaignCategory text="Education"></CampaignCategory>
        <CampaignInfo
          title="Powered Kits Learning Boxes"
          desc="Fun, durable and reusable boxes with eco-friendly options."
          size="small"
        ></CampaignInfo>
        <div className="flex justify-between items-start gap-x-5 mb-5">
          <CampaignMeta
            amout="$2,000"
            text="Raised of $1,900"
            size="small"
          ></CampaignMeta>
          <CampaignMeta
            amout="173"
            text="Total backers"
            size="small"
          ></CampaignMeta>
        </div>
        <CampaignAuthor author="Mahfuzul Nabil"></CampaignAuthor>
      </div>
    </div>
  );
};

export default withErrorBoundary(CampaignItem, {
  FallbackComponent: ErrorComponent,
});
