import React from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  makeStyles,
  fade,
  ButtonGroup
} from "@material-ui/core";

import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

export default function NavbarMU({ menuItems }) {
  const classes = useStyles();
  return (
    <>
      <>
        <ButtonGroup className={classes.btnGroup}>
          {menuItems.map((item, index) => {
            return (
              <Link to={item.slug}>
                <Button className={classes.buttons}>{item.label}</Button>
              </Link>
            );
          })}
        </ButtonGroup>

        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton edge="end" color="inherit">
            <AccountCircle />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
      </>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  root: {
    background: "#2A2727"
  },
  btnGroup: {},
  buttons: {
    color: "#fff",
    border: "red",

    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    height: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 0,
      "&:focus": {
        width: 150
      }
    }
  }
}));
