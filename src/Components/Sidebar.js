import React, { Component } from "react";

import "../Styles/Sidebar.css";
//SideBar Elements
import SidebarList from "./SidebarList";

//Icons
import MenuIcon from "@material-ui/icons/Menu";

import { ListItem, Button } from "@material-ui/core";
import itemsExt from "../Data/SidebarMenuData";

export default class Sidebar extends Component {
  state = {
    isOpen: true
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={this.state.isOpen ? "sidebar" : "sidebar-collapsed"}>
        <ListItem className="sidebar-item">
          <div className="sidebar-item-content">
            <div className="sidebar-item-content-text">
              <p>Categories</p>
            </div>
          </div>

          <Button
            color="primary"
            onClick={this.handleToggle}
            variant="contained"
            className={`sidebar-item-menu`}
            style={{
              borderRadius: "50%",
              height: "36px",
              width: "36px",
              minWidth: 0
            }}
          >
            <MenuIcon />
          </Button>
        </ListItem>
        <SidebarList items={itemsExt} isOpen={this.state.isOpen} />
      </div>
    );
  }
}
