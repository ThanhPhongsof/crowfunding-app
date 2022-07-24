import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import ErrorComponent from "components/common/ErrorComponent";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignGrid from "modules/campaign/CampaignGrid";
import { withErrorBoundary } from "react-error-boundary";
import { v4 } from "uuid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "components/common/Gap";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      {/* start: Your Campaign 2xl:366 max-w-1648px */}
      <Heading number={4}>Your Campaign</Heading>
      <CampaignFeature></CampaignFeature>
      {/* end: Your Campaign */}
      <Gap></Gap>
      {/* start: Popular Campaign */}
      <Heading>Popular Campaign</Heading>
      {/* <CampaignGrid>
        {Array(6)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid> */}
      {/* end: Popular Campaign */}
      <Gap></Gap>
      {/* start: Recent Campaign */}
      <Heading>Recent Campaign</Heading>
      {/* <CampaignGrid>
        {Array(6)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid> */}
      {/* end: Recent Campaign */}
    </LayoutDashboard>
  );
};

const DashboardPage1 = () => {
  return <LayoutDashboard></LayoutDashboard>;
};

export default withErrorBoundary(DashboardPage, {
  FallbackComponent: ErrorComponent,
});
