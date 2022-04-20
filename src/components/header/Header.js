import { AppBar, Avatar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { ExitToApp as LogOutIcon, Menu as MenuIcon, Person as AccountIcon, Settings as SettingIcon } from "@material-ui/icons";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import EVENTOR, { API_URL } from "../../api/api";
import logo from "../../assets/img/logo.png";
// context
import { toggleSidebar, useLayoutDispatch } from "../../context/LayoutContext";
import { useUserDispatch } from "../../context/UserContext";
import { AppUtils } from "../../utils/appUtils";
import { LOGOUT_SUCCESS } from "../../utils/constants";
import styles from "./style";
import AddAlertMessage from "../alert/Alert";
import { SOMETHING_WENT_WRONG } from "../../utils/constants/index";
import { LocalStorage } from "../../utils/storage/localStorage";
import { USER_ID } from "../../utils/constants/index";

export default function Header(props) {
  const [userFullName, setUserFullName] = useState([]);
  const classes = styles();
  let history = useHistory();

  // global
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [profileMenu, setProfileMenu] = useState(null);

  // const getUsername = () => {
  //   EVENTOR.get(API_URL.user)
  //     .then(response => {
  //       setUserFullName(response.data.fullName);
  //       response.data && LocalStorage.setItem(USER_ID, response.data.id);
  //     }).catch(error => {
  //       AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
  //     })
  // }

  // useEffect(() => {
  //   getUsername();
  // }, []);

  const logout = () => {
    EVENTOR.get(API_URL.logout)
      .then(response => {
        let data = response.data;
        if (data.type === "success") {
          AppUtils.removeUserRef();
          userDispatch({ type: LOGOUT_SUCCESS });
          history.push("/");
        }
      })
      .catch(error => {
      });
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse,
          )}
        >
          <MenuIcon
            classes={{
              root: classNames(
                classes.headerIcon,
                classes.headerIconCollapse,
              ),
            }}
          />
        </IconButton>
        <img src={logo} alt="WAA" width="36"></img>
        <Typography variant="h6" className={classes.brand}>
            WAA project
        </Typography>
        <Box display="flex" className={classes.userProfileMenu} justifyContent="center" alignItems="center" onClick={e => setProfileMenu(e.currentTarget)}>
          <Typography variant="body1" className={classes.username}>
            {userFullName}
          </Typography>
          <Avatar alt="Avatar" src={logo} />
        </Box>
        <Menu anchorEl={profileMenu} open={Boolean(profileMenu)} onClose={() => setProfileMenu(null)} classes={{ paper: classes.profileMenu }} disableAutoFocusItem>
          <MenuItem className={classes.profileMenuItem}>
            <Link onClick={logout} variant="body1" className={classes.profileMenuLink}>
              <LogOutIcon className={classes.profileMenuIcon} />
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
