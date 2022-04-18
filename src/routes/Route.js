import PropTypes from "prop-types";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AUTH_TOKEN, USER_ROLE } from "../utils/constants/index";
import { Cookies } from "../utils/storage/cookies";

export default function RouteWrapper({ component: Component, path: urlPath, isPrivate, isWrongLink, ...rest }) {
  if (isPrivate && !Cookies.readCookie(AUTH_TOKEN)) {
    return <Redirect to="/" />;
  } else if (!isPrivate && !isWrongLink && !urlPath.includes("/user-not-authorized") && Cookies.readCookie(AUTH_TOKEN) && Cookies.readCookie(USER_ROLE).includes("ADMIN")) {
    return <Redirect to="/admin/dashboard" />;
  } else if (!isPrivate && !isWrongLink && Cookies.readCookie(AUTH_TOKEN) && !urlPath.includes("/user-not-authorized") && (Cookies.readCookie(USER_ROLE).includes("SELLER"))) {
    return <Redirect to="/seller/products" />;
  } else if (!isPrivate && !isWrongLink && Cookies.readCookie(AUTH_TOKEN) && !urlPath.includes("/user-not-authorized") && (Cookies.readCookie(USER_ROLE).includes("BUYER"))) {
    return <Redirect to="/buyer" />;
  } else if (!isPrivate && !isWrongLink && Cookies.readCookie(AUTH_TOKEN) && !urlPath.includes("/user-not-authorized") && (Cookies.readCookie(USER_ROLE).includes("BUYER"))) {
    return <Redirect to="/seller" />;

  } else if (!isPrivate && !isWrongLink && Cookies.readCookie(AUTH_TOKEN) && !urlPath.includes("/user-not-authorized") && (Cookies.readCookie(USER_ROLE).includes("BUYER"))) {
    return <Redirect to="/seller" />;

  } else if (isPrivate && urlPath.includes("/seller") && !Cookies.readCookie(USER_ROLE).includes("SELLER")) {
    return <Redirect to="/user-not-authorized" />;
  } else if (isPrivate && urlPath.includes("/buyer") && !Cookies.readCookie(USER_ROLE).includes("BUYER")) {
    return <Redirect to="/user-not-authorized" />;
  } else if (isPrivate && urlPath.includes("/admin") && !Cookies.readCookie(USER_ROLE).includes("ADMIN")) {
    return <Redirect to="/user-not-authorized" />;
  } else {
    return <Route {...rest} component={Component} />;
  }
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isWrongLink: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isWrongLink: false
};
