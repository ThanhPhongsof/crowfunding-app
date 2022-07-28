import PropTypes from "prop-types";
import ErrorComponent from "components/common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

const CampaignSwiper = ({ children }) => {
  return (
    <Swiper grabCursor={"true"} slidesPerView={"auto"}>
      {Array(10)
        .fill(0)
        .map((item) => (
          <SwiperSlide key={v4()}>{children}</SwiperSlide>
        ))}
    </Swiper>
  );
};

CampaignSwiper.propTypes = {
  children: PropTypes.node,
};

export default withErrorBoundary(CampaignSwiper, {
  FallbackComponent: ErrorComponent,
});
