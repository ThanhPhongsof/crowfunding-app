import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";

const CampaignGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-4 2xl:grid-cols-6 gap-x-7">{children}</div>
  );
};

CampaignGrid.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(CampaignGrid, {
  FallbackComponent: ErrorComponent,
});
