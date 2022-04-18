import { Drawer, List } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
// context
import { useLayoutState } from "../../context/LayoutContext";
import { USER_ROLE_ADMIN } from "../../utils/constants";
import {
  ADMIN_SIDEBAR_LINKS,
  SELLER_SIDEBAR_LINKS,
} from "./helpers/SidebarItems";
import SidebarLink from "./helpers/SidebarLink/SidebarLink";
import { useUserState } from "../../context/UserContext";
import styles from "./style";

function Sidebar({ location }) {
  const classes = styles();

  // global
  var { isSidebarOpened } = useLayoutState();
  var { userRole } = useUserState();

  // local
  let sidebarLinks = SELLER_SIDEBAR_LINKS;

  if (userRole.includes(USER_ROLE_ADMIN)) {
    sidebarLinks = ADMIN_SIDEBAR_LINKS;
  }

  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <List className={classes.sidebarList}>
        {sidebarLinks.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
