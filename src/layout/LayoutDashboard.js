import React from "react";
import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

LayoutDashboard.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(LayoutDashboard, {
  FallbackComponent: ErrorComponent,
});
