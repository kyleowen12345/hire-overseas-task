import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { Home, Search, Menu, Close } from "@mui/icons-material";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const navItems = [
    { label: "Home", path: "/", icon: <Home /> },
    { label: "Characters", path: "/characters", icon: <Search /> },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          mb: 4,
          backgroundColor: "white",
          color: "black",
          boxShadow: 1,
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ py: 3, px: 0 }}>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img
                src="/rick.png"
                alt="Rick and Morty"
                style={{ height: 60, marginRight: 16 }}
              />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => navigate(item.path)}
                  variant={
                    location.pathname === item.path ? "contained" : "text"
                  }
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        PaperProps={{
          sx: {
            width: "100%",
          },
        }}
      >
        {/* Drawer Header with Close Icon */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
            borderBottom: "1px solid #ddd",
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
            >
              {item.icon}
              <ListItemText primary={item.label} sx={{ ml: 1 }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
