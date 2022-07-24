import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const DashboardFund = () => {
  return (
    <div className="hidden lg:flex items-center gap-x-2 text-text2 text-base font-semibold cursor-pointer">
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8.293L13.707 12.586L9.707 8.586L2 16.293L3.414 17.707L9.707 11.414L13.707 15.414L19.414 9.707L21.707 12V6H15.707L18 8.293Z"
            fill="#A2A2A8"
          />
        </svg>
      </span>
      <span>Fundrising for</span>
      <span className="w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 max-w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
};

export default withErrorBoundary(DashboardFund, {
  FallbackComponent: ErrorComponent,
});
