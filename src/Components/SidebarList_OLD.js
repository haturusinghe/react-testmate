import React from "react";

import { List, ListItem, Divider, Collapse } from "@material-ui/core";
import { Link } from "react-router-dom";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import ListItemText from "@material-ui/core/ListItemText";
// import { LinkUI } from "@material-ui/core";

function SidebarItem({
  item,
  prefix,
  depth = 0,
  depthStep = 10,
  expanded,
  isOpen,
  ...rest
}) {
  const [isCollapsed, setCollapsed] = React.useState(true);

  const { items, isLink, name, label, Icon, onClick: onClickProp } = item;

  let Container = isLink ? Link : React.Fragment;

  function toggleCollapsed() {
    setCollapsed(currentValue => !currentValue);
  }

  function onClick(event) {
    if (Array.isArray(items) && isOpen) {
      toggleCollapsed();
    }
    if (onClickProp) {
      onClickProp(event, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = isCollapsed ? (
      <ExpandMoreIcon className={`sidebar-item-content-expand-arrow`} />
    ) : (
      <ExpandLessIcon
        className={`sidebar-item-content-expand-arrow sidebar-item-content-expand-arrow-expanded`}
      />
    );
  }

  return (
    <React.Fragment key={name}>
      <Container to={`/papers/${prefix}`}>
        <ListItem
          onClick={onClick}
          className="sidebar-item"
          dense
          button
          style={{ paddingLeft: depth * depthStep }}
        >
          <div
            style={{ paddingLeft: depth * depthStep }}
            className="sidebar-item-content"
          >
            {Icon && (
              <Icon
                value={{ color: "blue" }}
                className="sidebar-item-content-icon"
                fontSize="large"
              />
            )}
            <div className="sidebar-item-content-text">{label}</div>
          </div>
          {expandIcon}
        </ListItem>
      </Container>
      <Collapse in={!isCollapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) && isOpen ? (
          <List disablePadding dense>
            {items.map((item, index) => (
              <React.Fragment key={`${item.name}${index}`}>
                {item === "divider" ? (
                  <Divider />
                ) : (
                  <SidebarItem
                    prefix={`${prefix}/${item.name}`}
                    item={item}
                    depth={depth + 1}
                    depthStep={depthStep}
                    isOpen={isOpen}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </React.Fragment>
  );
}

export default function SideBarList({
  items,
  depth,
  depthStep,
  expanded,
  isOpen
}) {
  return (
    <>
      <List disablePadding dense>
        {items.map((subItem, index) => (
          <React.Fragment key={`${subItem.name}${index}`}>
            {subItem === "divider" ? (
              <Divider style={{ margin: "6px 0" }} />
            ) : (
              <SidebarItem
                item={subItem}
                depth={depth}
                prefix={subItem.name}
                depthStep={depthStep}
                expanded={expanded}
                isOpen={isOpen}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
