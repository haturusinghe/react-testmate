import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Logo from "../Images/logo.svg";
import "../Styles/Navbar.css";

import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import { purple } from "@material-ui/core/colors";

import itemsForMenu from "../Data/NavbarData";
import NavbarMU from "./NavbarMU";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: null,
    "&:hover": {
      backgroundColor: null
    }
  }
}))(Button);

export default class Navbar extends Component {
  render() {
    return (
      <NavbarMU menuItems={itemsForMenu} />
      // <nav className="navbar">
      //   <div className="logo">
      //     <img src={Logo} alt="" />
      //   </div>
      //   <div className="navbar-inner">
      //     <div className="button-group">
      //       <ButtonGroup variant="text" color="primary">
      //         <Link to="/">
      //           <Button style={{ color: "white" }}>Home</Button>
      //         </Link>
      //         <Link to="/roadmap">
      //           <Button style={{ color: "white" }}>Road Map</Button>
      //         </Link>
      //         <Link to="/papers">
      //           <Button style={{ color: "white" }}>Papers</Button>
      //         </Link>
      //         <ColorButton variant="text" color="primary">
      //           About Us
      //         </ColorButton>
      //       </ButtonGroup>
      //     </div>
      //     <div>
      //       <input type="search" name="Search" id="" placeholder="Search" />
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
