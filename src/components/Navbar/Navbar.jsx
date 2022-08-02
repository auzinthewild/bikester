import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo.webp";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const theme = useTheme();
  const drawerWidth = 0;
  const location = useLocation();

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
            component={Link}
            to="/"
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
          {location.pathname === "/" && (
            <div
              style={{
                marginRight: theme.spacing(2),
              }}
            >
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
