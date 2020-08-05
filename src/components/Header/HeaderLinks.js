/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.dropdownLink}>
          HOME
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/landing-page" className={classes.dropdownLink}>
          ABOUT
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/profile-page" className={classes.dropdownLink}>
          FEATURED ARTISTS
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/shop-page" className={classes.dropdownLink}>
          SHOP
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login-page" className={classes.dropdownLink}>
          CANVII PORTAL
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/officialcanvii"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="ShoppingCart-tooltip"
          title="My Cart"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href=""
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-shopping-cart"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
