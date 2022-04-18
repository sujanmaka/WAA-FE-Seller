import {
  AccountBalance as AccountBalanceIcon,
  BorderColor as BorderColorIcon,
  FileCopy as FileCopyIcon,
  Home as HomeIcon,
  Note as NoteIcon,
  EventNote as EventIcon,
  AccountBalanceWalletOutlined,
  MonetizationOnRounded,
  PoolRounded,
} from "@material-ui/icons";
import React from "react";
export const ADMIN_SIDEBAR_LINKS = [
  {
    id: 0,
    label: "Dashboard",
    link: "/admin/dashboard",
    iconComponent: <HomeIcon fontSize="small" />,
  }
];

export const SELLER_SIDEBAR_LINKS = [
  {
    id: 0,
    label: "products",
    link: "/seller/products",
    iconComponent: <HomeIcon fontSize="small" />,
  },
  {
    id: 1,
    label: "orders",
    link: "/seller/orders",
    iconComponent: <PoolRounded fontSize="small" />,
  },
];
