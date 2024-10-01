import { Link as RouterLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import type { AppBarProps } from "@mui/material";

interface NavbarProps extends AppBarProps {
  onSidebarMobileOpen?: () => void;
}

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === "dark" && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
  }),
}));

const Navbar = (props: NavbarProps) => {
  const { onSidebarMobileOpen, ...other } = props;

  return (
    <NavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              lg: "none",
            },
          }}>
          {/* <MenuIcon fontSize="small" /> */}
        </IconButton>
        <RouterLink to="/">리리로고자리</RouterLink>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2,
          }}
        />
        <Box
          sx={{
            ml: 2,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: "20px",
          }}>
          <Typography>ID가여기에표시됩니다</Typography>
          <Button variant="contained">로그아웃</Button>
        </Box>
      </Toolbar>
    </NavbarRoot>
  );
};

export default Navbar;
