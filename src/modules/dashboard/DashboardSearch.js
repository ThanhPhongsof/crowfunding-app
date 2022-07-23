import ErrorComponent from "components/common/ErrorComponent";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const DashboardSearch = () => {
  return (
    <div className="flex items-center bg-white rounded-full p-2 w-full shadow-[10px_10px_rgba(218,_213,_213,_0.15)] ">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="bg-transparent text-sm placeholder:text-text4 text-text1 w-full"
        />
      </div>
      <button
        type="button"
        className="w-[72px] h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0"
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default withErrorBoundary(DashboardSearch, {
  FallbackComponent: ErrorComponent,
});
