import { Button } from "components/button";
import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          <img srcSet="./logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        {/* <DashboardFund></DashboardFund> */}
        <Button
          type="button"
          className="px-7 hidden lg:block"
          kind="secondary"
          href="/start-campaign"
        >
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
