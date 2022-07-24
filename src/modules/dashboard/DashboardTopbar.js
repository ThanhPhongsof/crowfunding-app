import { Button } from "components/button";
import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10">
        <img srcSet="./logo.png 2x" alt="crowfunding-app" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button type="button" className="bg-secondary px-7 hidden lg:block">
          Start a campaign
        </Button>
        <img
          srcSet="./logo.png 2x"
          alt="crowfunding-app"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default withErrorBoundary(DashboardTopbar, {
  FallbackComponent: ErrorComponent,
});
