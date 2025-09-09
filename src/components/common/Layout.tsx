import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
