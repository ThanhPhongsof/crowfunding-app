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
    url: "#",
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
    <div className="w-full md:w-[76px] bg-white rounded-3xl px-[14px] py-10 shadow-[10px_10px_rgba(218,_213,_213,_0.15)] flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={classNames(
            "flex items-center gap-x-5 md:justify-center md:w-12 md:h-12 md:rounded-3xl md:mb-8 text-iconColor last:bg-white last:shadow-sdprimary  md:last:mt-auto",
            ({ isActive }) => (isActive ? "bg-primaryExtra text-primary" : "")
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
