import ErrorComponent from "components/common/ErrorComponent";
import {
  IconCampaign,
  IconDashboard,
  IconLightDark,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { NavLink } from "react-router-dom";
import classNames from "utils/className";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/out",
    onClick: () => {},
  },
  {
    icon: <IconLightDark></IconLightDark>,
    title: "Light/Dark",
    url: "/lightdark",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full h-[554px] max-w-[324px] md:w-[76px] bg-white dark:bg-darkSecondary rounded-3xl px-[14px] py-10 shadow-[10px_10px_rgba(218,_213,_213,_0.15)] dark:shadow-none hidden md:flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          // className={({ isActive }) =>
          //   isActive
          //     ? "bg-primaryExtra dark:bg-darkStroke text-primary"
          //     : undefined
          // }
          className={classNames(
            "flex items-center gap-x-5 h-[52px] w-full mb-4 md:justify-center md:w-12 md:h-12 md:rounded-3xl md:mb-8 text-iconColor dark:text-text3 md:last:bg-white dark:bg-darkSecondary md:last:shadow-sdprimary dark:last:shadow-none  md:last:mt-auto"
          )}
        >
          <span className="">{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default withErrorBoundary(DashboardSidebar, {
  FallbackComponent: ErrorComponent,
});
