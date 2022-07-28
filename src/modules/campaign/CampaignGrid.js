import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

const CampaignGrid = ({ children, type = "default" }) => {
  if (type !== "default")
    return <div className="grid grid-cols-1 gap-y-10">{children}</div>;
  return <div className="campaign-list">{children}</div>;
};

CampaignGrid.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(CampaignGrid, {
  FallbackComponent: ErrorComponent,
});
