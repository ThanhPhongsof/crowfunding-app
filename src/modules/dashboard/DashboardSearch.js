import ErrorComponent from "components/common/ErrorComponent";
import { IconClose } from "components/icons";
import { defaultImageAuthor } from "constants/global";
import useToogleValue from "hooks/useToogleValue";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const DashboardSearch = () => {
  const { value: showSearch, handleToogleValue: handleToogleShowSearch } =
    useToogleValue(false);

  return (
    <div className="relative z-50">
      <div className="flex items-center bg-white dark:bg-darkSecondary rounded-full p-2 w-full shadow-[10px_10px_rgba(218,_213,_213,_0.15)] dark:shadow-none">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="bg-transparent text-sm placeholder:text-text4 dark:placeholder:text-text2 text-text1 dark:text-white w-full"
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
      {showSearch && (
        <div className="search-results w-[327px] h-[659px] lg:w-[843px] lg:h-[623px] bg-white dark:bg-darkSecondary absolute top-full left-0 rounded-3xl translate-y-5 pb-6 overflow-hidden">
          <div className="flex items-center justify-between p-3 bg-whiteSoft">
            <h4 className="font-medium text-sm pl-4 underline">
              See all 10,124 fundraisier
            </h4>
            <button className="flex items-center justify-center w-[72px] h-[50px] rounded-xl bg-darkRedSoft dark:bg-darkRed text-error cursor-pointer">
              <IconClose></IconClose>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col gap-y-5 h-full max-h-[340px] md:max-h-[360px] mb-20 md:mb-16 lg:mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <div className="">
              <h3 className="text-sm font-semibold mb-4">Related searchs</h3>
              <div className="flex flex-col gap-y-3 text-sm text-text2">
                <p>
                  <strong>education</strong> fund
                </p>
                <p>schoralship fund</p>
                <p>
                  <strong>education</strong> and schools fund
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImageAuthor}
        alt=""
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
}

export default withErrorBoundary(DashboardSearch, {
  FallbackComponent: ErrorComponent,
});
