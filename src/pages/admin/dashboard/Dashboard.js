import React from "react";
import { USER_ROLE } from "../../../utils/constants";
import { Cookies } from "../../../utils/storage/cookies";
import styles from "./style";

export default function AdminDashboard() {
  const classes = styles();
  const userRole = Cookies.readCookie(USER_ROLE);

  return (
    <>
      this is  admin dashboard
    </>
  );
}
