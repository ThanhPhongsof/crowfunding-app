import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import CampaignItem from "./CampaignItem";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

const CampaignGrid = () => {
  return (
    // <div className="grid grid-cols-4 2xl:grid-cols-6 gap-x-7">
    //   {children}
    // </div>
    <div className="campaign-list">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {Array(10)
          .fill(0)
          .map((item) => (
            <SwiperSlide key={v4()}>
              <CampaignItem></CampaignItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

CampaignGrid.propTypes = {};

export default withErrorBoundary(CampaignGrid, {
  FallbackComponent: ErrorComponent,
});
