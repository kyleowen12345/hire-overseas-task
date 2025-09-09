import { Box, Container, Typography, Link } from "@mui/material";

export const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      py: 4,
      bgcolor: "background.paper",
      borderTop: 1,
      borderColor: "divider",
    }}
  >
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box
          component="img"
          src="/rick.png"
          alt="Rick and Morty Logo"
          sx={{ height: 70 }}
        />

        <Typography variant="body2" color="text.secondary">
          Data provided by{" "}
          <Link
            href="https://rickandmortyapi.com"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            The Rick and Morty API
          </Link>
        </Typography>

        <Box display="flex" gap={3}>
          <Link
            href="https://rickandmortyapi.com"
            underline="none"
            target="_blank"
            rel="noopener noreferrer"
            color="text.secondary"
          >
            API Docs
          </Link>
        </Box>
      </Box>
    </Container>
  </Box>
);
