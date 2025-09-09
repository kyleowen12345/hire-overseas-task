import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";

interface SearchBarProps {
  query: string;
  loading: boolean;
  onQueryChange: (query: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  loading,
  onQueryChange,
  onSearch,
  onClear,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Paper elevation={0} sx={{ boxShadow: "none" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for characters (e.g., Rick, Morty, Summer Smith)"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black", // default border
            },
            "&:hover fieldset": {
              borderColor: "black", // hover border
            },
            "&.Mui-focused fieldset": {
              borderColor: "black", // focus border
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "black" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {query && (
                <IconButton onClick={onClear} disabled={loading} size="small">
                  <ClearIcon sx={{ color: "black" }} />
                </IconButton>
              )}
              <Button
                variant="contained"
                onClick={onSearch}
                disabled={loading || !query.trim()}
                sx={{ ml: 1 }}
              >
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Search"
                )}
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default SearchBar;
