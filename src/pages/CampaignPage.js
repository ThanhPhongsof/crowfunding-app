import PageContainer from "components/common/PageContainer";
import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import { Button } from "components/button";

const CampaignPage = () => {
  return (
    <LayoutDashboard>
      <PageContainer>
        <div className="mb-10 bg-white rounded-3xl flex items-center justify-between">
          <div className="flex items-start gap-x-6 px-10 py-8">
            <button
              type="button"
              className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-secondary bg-opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <div className="flex-1">
              <h1 className="text-[22px] font-semibold mb-2">
                Create Your Campaign
              </h1>
              <p className="text-sm text-text3 mb-2">
                Jump right into our editor and create your first Virtue
                campaign!
              </p>
              <a href="/" className="text-primary text-sm">
                Need any help? Learn More...
              </a>
            </div>
          </div>
          <Button
            type="button"
            kind="ghost"
            className="px-8"
            href="/start-campaign"
          >
            Create campaign
          </Button>
        </div>
        <Heading number={4}>Your Campaign</Heading>
        <CampaignGrid type="column">
          <CampaignFeature></CampaignFeature>
          <CampaignFeature></CampaignFeature>
          <CampaignFeature></CampaignFeature>
        </CampaignGrid>
        <div className="mt-10"></div>
        <Button type="button" kind="ghost" className="px-8 mx-auto">
          <span>See more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </PageContainer>
    </LayoutDashboard>
  );
};

export default withErrorBoundary(CampaignPage, {
  FallbackComponent: ErrorComponent,
});
