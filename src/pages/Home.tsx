import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mt={8}>
        <Typography variant="h2" gutterBottom>
          Rick And Morty
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Character Explorer
        </Typography>

        <Button
          component={Link}
          to="/characters"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
