import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { Box, Drawer, Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PATH } from '../../constant/paths';
import SideBarSection from './SideBarSection';

const SidebarList = [
  {
    title: '',
    items: [
      // Banner
      {
        title: '유저 관리',
        path: PATH.USER,
        icon: <PeopleAltIcon fontSize="small" />,
      },
      {
        title: '콘텐츠 관리',
        path: PATH.CONTENTS,
        icon: <AutoStoriesIcon fontSize="small" />,
        children: [
          {
            title: '영화',
            path: PATH.CONTENTS + '/movie',
          },
        ],
      },
      {
        title: '운영 관리',
        path: PATH.OPERATE,
        icon: <AutoAwesomeMotionIcon fontSize="small" />,
        children: [
          {
            title: '영화',
            path: PATH.OPERATE + '/movie',
          },
        ],
      },
    ],
  },
];

interface SidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  // const { user } = useAuth();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const sideBarList = SidebarList;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content: React.ReactNode = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: {
            lg: 'none',
            xs: 'flex',
          },
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Link to="/">리리 로고 자리</Link>
      </Box>
      <Box sx={{ p: 2 }}>
        {sideBarList.map((section) => (
          <SideBarSection
            key={section.title}
            sx={{
              '& + &': {
                mt: 3,
              },
            }}
            {...section}
          />
        ))}
      </Box>
    </Box>
  );

  if (lgUp)
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 200,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 200,
        },
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;
