import PageContainer from "components/common/PageContainer";
import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import Gap from "components/common/Gap";
import ErrorComponent from "components/common/ErrorComponent";
import CampaignSwiper from "modules/campaign/CampaignSwiper";
import CampaignItem from "modules/campaign/CampaignItem";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import { withErrorBoundary } from "react-error-boundary";

const DashboardPage = () => {
  return (
    <LayoutDashboard>
      {/* start: Your Campaign 2xl:366 max-w-1648px */}
      <PageContainer>
        <Heading number={4}>Your Campaign</Heading>
        <CampaignFeature></CampaignFeature>
      </PageContainer>
      {/* end: Your Campaign */}
      <Gap></Gap>
      {/* start: Popular Campaign */}
      <PageContainer>
        <Heading>Popular Campaign</Heading>
        <CampaignGrid>
          <CampaignSwiper>
            <CampaignItem></CampaignItem>
          </CampaignSwiper>
        </CampaignGrid>
      </PageContainer>
      {/* end: Popular Campaign */}
      <Gap></Gap>
      {/* start: Recent Campaign */}
      <PageContainer>
        <Heading>Recent Campaign</Heading>
        <CampaignGrid>
          <CampaignSwiper>
            <CampaignItem></CampaignItem>
          </CampaignSwiper>
        </CampaignGrid>
      </PageContainer>
      {/* end: Recent Campaign */}
    </LayoutDashboard>
  );
};

export default withErrorBoundary(DashboardPage, {
  FallbackComponent: ErrorComponent,
});
