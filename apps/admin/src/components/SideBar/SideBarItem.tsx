import { useState } from 'react';
import type { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import { Box, Button, Collapse, ListItem } from '@mui/material';

import type { ListItemProps } from '@mui/material';

interface SidebarItemProps extends ListItemProps {
  active?: boolean;
  children?: ReactNode;
  depth: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

const SideBarItem = (props: SidebarItemProps) => {
  const { active, children, depth, icon, info, open: openProp, path, title, ...other } = props;
  const [open, setOpen] = useState<boolean>(openProp as boolean);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 16;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'block',
          py: 0,
        }}
        {...other}
      >
        <Button
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: 'text.secondary',
            fontWeight: 'fontWeightMedium',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: '8px',
            py: '12px',
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
          }}
          variant="text"
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
          {info}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
    >
      <Button
        component={path ? RouterLink : Button}
        startIcon={icon}
        sx={{
          color: 'text.secondary',
          fontWeight: 'fontWeightMedium',
          justifyContent: 'flex-start',
          textAlign: 'left',
          pl: `${paddingLeft}px`,
          pr: '8px',
          py: '12px',
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'primary.main',
            fontWeight: 'fontWeightBold',
            '& svg': {
              color: 'primary.main',
            },
          }),
        }}
        variant="text"
        to={path}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
        {info}
      </Button>
    </ListItem>
  );
};

export default SideBarItem;
