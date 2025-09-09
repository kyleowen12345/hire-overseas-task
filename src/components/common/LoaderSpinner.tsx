import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: 8,
    }}
  >
    <CircularProgress size={50} sx={{ mb: 2, color: "black" }} />
    <Typography variant="h6" color="text.secondary">
      {message}
    </Typography>
  </Box>
);
