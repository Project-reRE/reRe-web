import type { ReactNode } from "react";
import { matchPath } from "react-router-dom";

import { List, ListSubheader } from "@mui/material";
import type { ListProps } from "@mui/material";
import SideBarItem from "./SideBarItem";

interface Item {
  path?: string;
  icon?: ReactNode;
  info?: ReactNode;
  children?: Item[];
  title: string;
}

interface SidebarSectionProps extends ListProps {
  items: Item[];
  title: string;
}

const SideBarSection = (props: SidebarSectionProps) => {
  const { items, title, ...other } = props;

  return (
    <List
      subheader={
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: "text.primary",
            fontSize: "0.75rem",
            lineHeight: 2.5,
            fontWeight: 700,
            textTransform: "uppercase",
          }}>
          {title}
        </ListSubheader>
      }
      {...other}>
      {renderSidebarItems({
        items,
      })}
    </List>
  );
};

export default SideBarSection;

const renderSidebarItems = ({
  items,
  depth = 0,
}: {
  items: Item[];
  depth?: number;
}): JSX.Element => (
  <List disablePadding>
    {items.reduce(
      (acc: JSX.Element[], item) =>
        reduceChildRoutes({
          acc,
          item,
          depth,
        }),
      []
    )}
  </List>
);

const reduceChildRoutes = ({
  acc,
  item,
  depth,
}: {
  acc: JSX.Element[];
  item: Item;
  depth: number;
}): Array<JSX.Element> => {
  const key = `${item.title}-${depth}`;
  const pathname = window.location.pathname;
  const partialMatch = item.path
    ? !!matchPath(`${item.path}/*`, pathname)
    : false;

  acc.push(
    <SideBarItem
      active={partialMatch}
      depth={depth}
      icon={item.icon}
      info={item.info}
      key={key}
      open={true}
      path={item.path}
      title={item.title}>
      {item.children &&
        renderSidebarItems({
          depth: depth + 1,
          items: item.children,
        })}
    </SideBarItem>
  );

  return acc;
};
