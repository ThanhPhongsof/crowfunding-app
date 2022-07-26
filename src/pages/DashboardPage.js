import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import Gap from "components/common/Gap";
import ErrorComponent from "components/common/ErrorComponent";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import { withErrorBoundary } from "react-error-boundary";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      {/* start: Your Campaign 2xl:366 max-w-1648px */}
      <div className="page-container">
        <Heading number={4}>Your Campaign</Heading>
        <CampaignFeature></CampaignFeature>
      </div>
      {/* end: Your Campaign */}
      <Gap></Gap>
      {/* start: Popular Campaign */}
      <div className="page-container">
        <Heading>Popular Campaign</Heading>
        <CampaignGrid></CampaignGrid>
      </div>
      {/* end: Popular Campaign */}
      <Gap></Gap>
      {/* start: Recent Campaign */}
      <div className="page-container">
        <Heading>Recent Campaign</Heading>
        <CampaignGrid></CampaignGrid>
      </div>
      {/* end: Recent Campaign */}
    </LayoutDashboard>
  );
};

export default withErrorBoundary(DashboardPage, {
  FallbackComponent: ErrorComponent,
});
