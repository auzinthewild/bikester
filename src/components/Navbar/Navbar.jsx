import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const theme = useTheme();
  const drawerWidth = 0;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        }}
        color="inherit"
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex",
              textDecoration: "none",
            }}
            color="inherit"
          >
            <img
              src={logo}
              alt="Shopsuey"
              height="25px"
              style={{ marginRight: "10px" }}
            />
            Shopsuey
          </Typography>
          <div></div>
          <div style={{ flexGrow: 1 }} />
          <div
            style={{
              marginRight: theme.spacing(2),
            }}
          >
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
