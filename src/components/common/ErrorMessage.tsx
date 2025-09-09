import { Alert, Box } from "@mui/material";

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <Box sx={{ py: 4 }}>
    <Alert severity="error" sx={{ mb: 2 }}>
      <strong>Something went wrong!</strong> {error}
    </Alert>
  </Box>
);
