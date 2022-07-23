// import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import LayoutDashboard from "layout/LayoutDashboard";
import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";

const DashboardPage = () => {
  return <LayoutDashboard>content</LayoutDashboard>;
};

// DashboardPage.propTypes = {};

export default withErrorBoundary(DashboardPage, {
  FallbackComponent: ErrorComponent,
});
